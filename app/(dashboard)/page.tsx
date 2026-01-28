import React from "react";

export default function DashboardHome() {
  return (
    <section>
      <h1>Agency Project Management Dashboard</h1>
      <p>Welcome! Select a section below to manage your agency's projects, clients, teams, and tasks.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
        <a href="/(dashboard)/projects" style={cardStyle}>
          <h2>Projects</h2>
          <p>View and manage ongoing and completed projects.</p>
        </a>
        <a href="/(dashboard)/clients" style={cardStyle}>
          <h2>Clients</h2>
          <p>Manage all client information and contacts.</p>
        </a>
        <a href="/(dashboard)/teams" style={cardStyle}>
          <h2>Teams</h2>
          <p>Organize your teams and assign members to projects.</p>
        </a>
        <a href="/(dashboard)/tasks" style={cardStyle}>
          <h2>Tasks</h2>
          <p>Track and update tasks for every project.</p>
        </a>
      </div>
    </section>
  );
};

const cardStyle: React.CSSProperties = {
  display: "block",
  padding: "2rem",
  background: "#fafbfc",
  border: "1px solid #e5e7eb",
  borderRadius: "1rem",
  textDecoration: "none",
  color: "#111",
  boxShadow: "0px 2px 10px 0px rgba(60,60,60,0.03)",
  transition: "box-shadow 0.2s",
};