"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Tab from "@/components/Tab";

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
    <main className="bg-[#d9cbb1] flex flex-col">
      <section className="w-full bg-[#161616]">
        <HeroSection />
      </section>

      <span className="block w-full h-px bg-[#ffffff1a]" />

      <section
        id="projects"
        className="relative w-full flex-1 bg-[#161616] border-t border-[#ffffff1a] px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
        style={{paddingLeft: 'clamp(1rem, 5vw, 7rem)'}}
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="flex flex-nowrap overflow-x-auto">
            <Tab
              label="Star Wars App"
              active={true}
              onTabClick={() =>
                handleTabClick("https://starwars-motivator.vercel.app")
              }
            />
            <Tab label="Shonen Motivator" />
            <Tab label="Marketheroes" />
            <Tab label="Spacescenes" />
            <Tab label="Hayabusa" />
          </div>
        </div>

        {animating && <div className="page-out-animation" />}
      </section>
    </main>
  );
}