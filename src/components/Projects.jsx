import { useState } from "react";

const devProjects = [
  {
    id: 1,
    title: "Eventra - Events & Catering Management System",
    description: "An all-in-one solution for managing catering orders and tracking expenses. The application helps businesses streamline their operations, manage inventory, and maintain financial records in one place.",
    tags: ["Software Development", "Entity Framework", "ASP.NET Core", "SQL Server", "C#"],
  },
  {
    id: 2,
    title: "Keystroke Tracker",
    description: "A productivity tool that tracks and analyzes keystroke patterns.",
    tags: ["JavaScript", "Electron"],
  },
  {
    id: 3,
    title: "Quizit",
    description: "An interactive quiz application for engaging learning experiences.",
    tags: ["React", "Node.js"],
  },
  {
    id: 4,
    title: "Planify",
    description: "A planning and task management application.",
    tags: ["JavaScript", "CSS3"],
  },
  {
    id: 5,
    title: "To-do List",
    description: "A clean and minimal to-do list application.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
];

const uiuxProjects = [
  {
    id: 1,
    title: "Mobile Banking App UI",
    description: "A clean and modern mobile banking interface with a focus on usability.",
    tags: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    description: "A complete redesign of an e-commerce platform focusing on conversion.",
    tags: ["Figma", "UX Research"],
  },
];

export default function Projects() {
  const [mode, setMode] = useState("dev");
  const [selected, setSelected] = useState(devProjects[0]);

  const projects = mode === "dev" ? devProjects : uiuxProjects;

  const handleModeSwitch = () => {
    const next = mode === "dev" ? "uiux" : "dev";
    setMode(next);
    setSelected(next === "dev" ? devProjects[0] : uiuxProjects[0]);
  };

  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="hidden md:block absolute left-[136px] lg:left-[156px] top-0 bottom-0 w-px bg-[#1E293B]" />
      <div className="hidden md:block absolute left-[129px] lg:left-[149px] top-20">
        <svg width="13" height="13" viewBox="0 0 14 14">
          <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#7c5fe6" />
        </svg>
      </div>

      <div className="px-6 sm:px-8 md:pl-[180px] lg:pl-[200px] md:pr-8">
        <h2 className="font-mono text-[#a78bfa] text-lg sm:text-2xl font-bold mb-6 tracking-widest">Projects</h2>

        {/* Switch button */}
        <button onClick={handleModeSwitch}
          className="flex items-center justify-between border border-[#2a2a5a] bg-[#0f1028] text-white font-mono text-xs sm:text-sm px-4 py-2.5 mb-4 hover:border-[#7c5fe6] transition-colors w-full md:w-72">
          <span>{mode === "dev" ? "Switch to UI/UX" : "Switch to Dev"}</span>
          <span className="text-[#7c5fe6]">⇄</span>
        </button>

        {/* Mobile: stacked list. Desktop: side by side */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Main display */}
          <div className="flex-1">
            <div className="w-full h-40 sm:h-52 md:h-64 bg-[#0d1030] border border-[#1e2040] mb-4" />
            <h3 className="font-mono text-white font-bold text-sm sm:text-base mb-2">{selected.title}</h3>
            <p className="font-mono text-gray-400 text-xs sm:text-sm leading-loose mb-4">{selected.description}</p>
            <div className="flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span key={tag} className="border border-[#2a2a5a] text-gray-300 font-mono text-[10px] px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project list — full width cards on mobile */}
          <div className="md:w-64 lg:w-72 flex flex-col gap-2">
            {projects.map((proj) => (
              <button key={proj.id} onClick={() => setSelected(proj)}
                className={`flex items-center gap-3 border p-3 text-left transition-colors w-full ${
                  selected.id === proj.id
                    ? "border-[#7c5fe6] bg-[#1a1a40]"
                    : "border-[#1e2040] bg-[#0f1028] hover:border-[#2a2a5a]"
                }`}>
                <div className="w-14 h-10 bg-[#0d1030] flex-shrink-0 border border-[#1e2040]" />
                <span className="font-mono text-[10px] sm:text-xs text-gray-300 line-clamp-2">{proj.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}