// components/ProjectPanel.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

type Project = {
  label: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
};

const projects: Project[] = [
  {
    label: "Star Wars Motivator",
    description: "For those who feel the Force, an immersive app to awaken the Jedi within you.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
    url: "https://starwars-motivator.vercel.app",
    image: "/images/starwars-preview.png",
  },
];

export default function ProjectPanel({ activeLabel }: { activeLabel: string }) {
  const [animating, setAnimating] = useState(false);
  const project = projects.find((p) => p.label === activeLabel);
  if (!project) return null;

  const handleViewProjectClick = (url: string) => {
    setAnimating(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setAnimating(false);
    }, 800);
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-8 px-4 py-8 lg:py-12"
      style={{ paddingLeft: "clamp(1rem, 5vw, 7rem)", paddingTop: "3rem", paddingBottom: "2rem" }}
    >
      <div className="w-full flex justify-center lg:block lg:w-[55%]">
        <Image
          src={project.image}
          alt={project.label}
          width={800}
          height={450}
          className="w-full max-w-[320px] object-cover sm:max-w-[500px] lg:max-w-none"
        />
      </div>

      <div className="flex flex-col gap-6 lg:w-[45%] justify-center">
        <h2 className="font-serif text-3xl font-bold text-[#F2EAD8]">
          {project.label}
        </h2>
        <p className="font-mono text-sm text-[#8d8d8d] leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-[#D4A827] border border-[#D4A827] px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={() => handleViewProjectClick(project.url)}
          className="inline-flex w-fit items-center gap-2 font-mono text-sm text-[#F2EAD8] border border-[#ffffff33] px-6 py-3 hover:bg-[#2a2a2a] no-underline uppercase tracking-[0.12em] cursor-pointer bg-transparent"
        >
          View Project →
        </button>
      </div>

      {animating && <div className="page-out-animation" />}
    </div>
  );
}