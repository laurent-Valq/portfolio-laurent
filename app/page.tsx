"use client";
import { useState } from "react";
import Tab from "@/components/Tab";
import TitleBand from "@/components/TitleBand";

export default function Home() {
  const [animating, setAnimating] = useState(false);

  const handleTabClick = (url: string) => {
    setAnimating(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setAnimating(false);
    }, 800);
  };

  return (
    <div style={{ backgroundColor: "#d9cbb1", width: "100vw", height: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ 
        position: "relative",
        width: "70%", 
        height: "70vh", 
        background: "#1e1e1e",
        /* backgroundImage: "url('/images/document-v3.webp')", */
        /* backgroundSize: "100% 100%", */
        /* backgroundRepeat: "no-repeat", */
      }}>
        <div className="tabs-container">
          <Tab label="Star Wars App" active={true} onTabClick={() => handleTabClick("https://starwars-motivator.vercel.app")} />
          <Tab label="Next Project" />
          <Tab label="Next Project" />
          <Tab label="Next Project" />
          <Tab label="Next Project" />
          <Tab label="Next Project" />
          <Tab label="Next Project" />
        </div>
        <TitleBand />

        {animating && (
          <div className="page-out-animation" />
        )}
      </div>
    </div>
  );
}