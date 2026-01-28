import React from "react";
import Link from "next/link";

export default function DashboardHome() {
  return (
    <section>
      <h1>Agency Project Management Dashboard</h1>
      <p>
        Welcome! Select a section below to manage your agency's projects, clients,
        teams, tasks, and settings.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <Link href="/(dashboard)/projects" style={{ textDecoration: "none" }}>
          <div style={cardStyle} tabIndex={0} role="link">
            <h2>Projects</h2>
            <p>Track, organize, and monitor all active and completed projects.</p>
          </div>
        </Link>
        <Link href="/(dashboard)/clients" style={{ textDecoration: "none" }}>
          <div style={cardStyle} tabIndex={0} role="link">
            <h2>Clients</h2>
            <p>Manage your client database and contact information.</p>
          </div>
        </Link>
        <Link href="/(dashboard)/teams" style={{ textDecoration: "none" }}>
          <div style={cardStyle} tabIndex={0} role="link">
            <h2>Teams</h2>
            <p>Oversee agency teams and assign members to projects.</p>
          </div>
        </Link>
        <Link href="/(dashboard)/tasks" style={{ textDecoration: "none" }}>
          <div style={cardStyle} tabIndex={0} role="link">
            <h2>Tasks</h2>
            <p>See, update, and complete project-specific tasks.</p>
          </div>
        </Link>
        <Link href="/(dashboard)/settings" style={{ textDecoration: "none" }}>
          <div style={cardStyle} tabIndex={0} role="link">
            <h2>Settings</h2>
            <p>Adjust agency-wide preferences and workspace configuration.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  display: "block",
  cursor: "pointer",
  padding: "2rem",
  background: "#fafbfc",
  border: "1px solid #e5e7eb",
  borderRadius: "1rem",
  textDecoration: "none",
  color: "#111",
  boxShadow: "0px 2px 10px 0px rgba(60,60,60,0.03)",
  transition: "box-shadow 0.2s",
};