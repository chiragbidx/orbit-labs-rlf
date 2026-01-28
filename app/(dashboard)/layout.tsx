import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav style={{ borderBottom: "1px solid #eee", padding: "1rem 0" }}>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", padding: 0, margin: 0 }}>
          <li><a href="/(dashboard)">Home</a></li>
          <li><a href="/(dashboard)/projects">Projects</a></li>
          <li><a href="/(dashboard)/clients">Clients</a></li>
          <li><a href="/(dashboard)/teams">Teams</a></li>
          <li><a href="/(dashboard)/tasks">Tasks</a></li>
        </ul>
      </nav>
      <main style={{ maxWidth: "1200px", margin: "2rem auto", padding: "2rem" }}>
        {children}
      </main>
    </div>
  );
}