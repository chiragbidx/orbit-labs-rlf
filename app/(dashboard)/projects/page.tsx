import React from "react";
import { PrismaClient } from "@prisma/client";

// NOTE: In a real Next.js project, use a shared db utility instead of instantiating PrismaClient here:
// import { db } from "../../../lib/db";
const prisma = new PrismaClient();

async function getProjects() {
  // Assumes: Project model has at least id, name, status, createdAt fields
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        status: true,
        createdAt: true,
      },
    });
    return projects;
  } catch (error) {
    return null;
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <h1>Projects</h1>
      <p>View all projects in your agency workspace.</p>
      {!projects && (
        <div style={errorStyle}>
          <strong>Error:</strong> Unable to load projects.
        </div>
      )}
      {projects && projects.length === 0 && (
        <div style={{ color: "#555", marginTop: "2rem" }}>No projects found.</div>
      )}
      {projects && projects.length > 0 && (
        <div style={{ overflowX: "auto", marginTop: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px" }}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Created</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj) => (
                <tr key={proj.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={tdStyle}>{proj.name}</td>
                  <td style={tdStyle}>{proj.status}</td>
                  <td style={tdStyle}>
                    {new Date(proj.createdAt).toLocaleDateString("en", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "0.8em",
  fontWeight: 600,
  fontSize: "1em",
};

const tdStyle: React.CSSProperties = {
  padding: "0.7em",
  fontSize: "0.97em",
};

const errorStyle: React.CSSProperties = {
  background: "#fdecea",
  color: "#b71c1c",
  border: "1px solid #f5c6cb",
  borderRadius: "6px",
  padding: "1em",
  marginTop: "1.5em",
};