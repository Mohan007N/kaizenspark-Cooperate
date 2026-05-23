import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./index.css";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: "100vh", background: "#0a0f1e", color: "#fff",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", padding: "2rem", fontFamily: "monospace",
        }}>
          <div style={{
            maxWidth: 700, width: "100%", background: "#1a1f2e",
            border: "1px solid #ef4444", borderRadius: 12, padding: "2rem",
          }}>
            <h1 style={{ color: "#ef4444", fontSize: "1.25rem", marginBottom: "1rem" }}>
              ⚠ App Crashed — Runtime Error
            </h1>
            <pre style={{
              background: "#0d1117", padding: "1rem", borderRadius: 8,
              overflowX: "auto", color: "#fca5a5", fontSize: "0.8rem",
              whiteSpace: "pre-wrap", wordBreak: "break-all",
            }}>
              {this.state.error.message}
              {"\n\n"}
              {this.state.error.stack}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
