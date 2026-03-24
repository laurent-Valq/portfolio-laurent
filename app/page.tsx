"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Tab from "@/components/Tab";
import ProjectPanel from "@/components/ProjectPanel";

export default function Home() {
  const [animating, setAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState("Star Wars Motivator");

  const handleTabClick = (url: string) => {
    setAnimating(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setAnimating(false);
    }, 800);
  };

  return (
    <main className="bg-[#d9cbb1] flex flex-col">
      <section className="w-full bg-[#161616]">
        <HeroSection />
      </section>

      <span className="block w-full h-px bg-[#ffffff1a]" />

      <section
        id="projects"
        className="relative w-full flex-1 bg-[#161616] border-t border-[#ffffff1a] px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
      >
        <div className="mx-auto w-full max-w-[1400px]"
        style={{paddingLeft: 'clamp(1rem, 5vw, 7rem)'}}
        >
          <div className="flex flex-nowrap overflow-x-auto">
            <Tab
              label="Star Wars Motivator"
              active={activeTab === "Star Wars Motivator"}
              onTabClick={() => setActiveTab("Star Wars Motivator")}
            />
            <Tab label="Shonen Motivator" active={activeTab === "Shonen Motivator"} onTabClick={() => setActiveTab("Shonen Motivator")} />
            <Tab label="Marketheroes" active={activeTab === "Marketheroes"} onTabClick={() => setActiveTab("Marketheroes")} />
            <Tab label="Spacescenes" active={activeTab === "Spacescenes"} onTabClick={() => setActiveTab("Spacescenes")} />
            <Tab label="Hayabusa" active={activeTab === "Hayabusa"} onTabClick={() => setActiveTab("Hayabusa")} />
            <Tab label="Hayabusa" active={activeTab === "Hayabusa"} onTabClick={() => setActiveTab("Hayabusa")} />
          </div>
        </div>

        <ProjectPanel activeLabel={activeTab} />

        {animating && <div className="page-out-animation" />}
      </section>
    </main>
  );
}