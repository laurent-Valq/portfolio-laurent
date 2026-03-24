"use client";
import { useState } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "8px",
        }}
      >
        <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#161616" }} />
        <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#161616" }} />
        <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#161616" }} />
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "100%",
          right: "0",
          width: "280px",
          backgroundColor: "rgba(0,0,0,0.85)",
          color: "#f5f0e8",
          padding: "20px",
          fontFamily: "Georgia, serif",
          fontSize: "13px",
          lineHeight: "1.8",
          letterSpacing: "0.5px",
          zIndex: 100,
          borderRadius: "0 0 8px 8px",
        }}>
          Creative frontend developer, passionate about design, code and game development.
          Currently building a video game studio, I craft unique web experiences combining 
          technical skills and creativity.
        </div>
      )}
    </div>
  );
}