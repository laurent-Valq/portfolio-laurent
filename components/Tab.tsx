"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import underConstruction from "@/data/animations/Gearslottie.json";

export default function Tab({ label, active = false, onTabClick }: { 
  label: string; 
  active?: boolean; 
  onTabClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth <= 1800);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const content = (
    <div
      className="tab-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 20px",
        backgroundColor: active ? (hovered ? "#bfa043" : "#d4b24f") : (hovered ? "#4c4c4c" : "#5b5b5b"),
        color: "#eaeaea",
        cursor: "pointer",
        fontSize: "12px",
        letterSpacing: "1px",
        fontFamily: "Georgia, serif",
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
          style={{ width: isSmall ? 40 : 24, height: isSmall ? 40 : 24, opacity: 1 }}
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