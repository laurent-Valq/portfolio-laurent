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
        <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white" }} />
        <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white" }} />
        <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white" }} />
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: "0",
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
          Développeur frontend créatif, passionné par le design et le code. 
          Ancien game developer sous Hayabusa Studio, je construis aujourd'hui 
          des expériences web uniques alliant technique et créativité.
        </div>
      )}
    </div>
  );
}