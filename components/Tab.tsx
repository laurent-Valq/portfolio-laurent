"use client";
import { useState } from "react";
import Lottie from "lottie-react";
import underConstruction from "@/data/animations/Gearslottie.json";

export default function Tab({ label, active = false, onTabClick }: { 
  label: string; 
  active?: boolean; 
  onTabClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <div
      className="tab-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 20px",
        backgroundColor: active ? (hovered ? "#a8873a" : "#c9a84c") : (hovered ? "#555" : "#6b6b6b"),
        color: "white",
        cursor: "pointer",
        fontSize: "12px",
        letterSpacing: "1px",
        fontFamily: "Georgia, serif",
        width: "150px",
        textAlign: "center",
        transition: "background-color 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
      }}
    >
      {label}
      {!active && (
        <Lottie
          animationData={underConstruction}
          loop={true}
          style={{ width: 18, height: 18, opacity: 1 }}
        />
      )} 
    </div>
  );

  if (onTabClick) {
    return (
      <div onClick={onTabClick} style={{ cursor: "pointer" }}>
        {content}
      </div>
    );
  }

  return content;
}