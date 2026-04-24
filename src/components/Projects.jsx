import { useState } from "react";

const devProjects = [
  {
    id: 1,
    title: "Eventra - Events & Catering Management System",
    description:
      "An all-in-one solution for managing catering orders and tracking expenses. The application helps businesses streamline their operations, manage inventory, and maintain financial records in one place.",
    tags: ["Software Development", "Entity Framework", "ASP.NET Core", "SQL Server", "C#"],
    image: null,
  },
  {
    id: 2,
    title: "Keystroke Tracker",
    description: "A productivity tool that tracks and analyzes keystroke patterns to help you understand your typing habits.",
    tags: ["JavaScript", "Electron"],
    image: null,
  },
  {
    id: 3,
    title: "Quizit",
    description: "An interactive quiz application for engaging and fun learning experiences.",
    tags: ["React", "Node.js"],
    image: null,
  },
  {
    id: 4,
    title: "Planify",
    description: "A planning and task management application to keep you organized.",
    tags: ["JavaScript", "CSS3"],
    image: null,
  },
  {
    id: 5,
    title: "To-do List",
    description: "A clean and minimal to-do list application built with vanilla web technologies.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: null,
  },
];

const uiuxProjects = [
  {
    id: 1,
    title: "Mobile Banking App UI",
    description: "A clean and modern mobile banking interface with a focus on usability and accessibility.",
    tags: ["Figma", "UI Design", "Prototyping"],
    image: null,
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    description: "A complete redesign of an e-commerce platform focusing on conversion and user delight.",
    tags: ["Figma", "UX Research"],
    image: null,
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
    <section id="projects" className="relative min-h-screen flex items-start py-20">
      <div className="hidden md:block absolute left-[136px] lg:left-[156px] top-0 bottom-0 w-px bg-[#3D3367] z-0" />

      <div className="w-full px-6 sm:px-10 md:pl-[160px] lg:pl-[180px] xl:pl-[200px] pr-6 md:pr-8">
        <div className="relative z-10 flex items-center gap-3 mb-8">
          <div className="hidden md:block flex-shrink-0 -ml-[32px] relative z-10 bg-[#000013] px-[1px]">
            <svg width="16" height="16" viewBox="0 0 14 14">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#A78BFA" />
            </svg>
          </div>
          <h2
            className="text-[#A78BFA] text-2xl font-bold tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Projects
          </h2>
        </div>

        <div className="flex gap-8">
          {/* Main preview */}
          <div className="flex-1">
            <div className="w-full h-72 bg-[#0F172A] border border-[#1E293B] mb-6 flex items-center justify-center">
              {selected.image ? (
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#0F172A]" />
              )}
            </div>

            <h3 className="text-[#F8FAFC] font-semibold text-lg mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{selected.title}</h3>
            <p className="text-[#94A3B8] text-sm leading-loose mb-5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{selected.description}</p>

            <div className="flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#1E293B] text-[#94A3B8] text-xs px-3 py-1 rounded-full"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-72 flex-shrink-0">
            <button
              onClick={handleModeSwitch}
              className="w-full flex items-center justify-between border border-[#1E293B] bg-[#0F172A] text-[#F8FAFC] text-sm px-4 py-3 mb-3 hover:border-[#A78BFA] transition-colors duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span>{mode === "dev" ? "Switch to UI/UX" : "Switch to Dev"}</span>
              <span className="text-[#A78BFA]">⇄</span>
            </button>

            <div className="flex flex-col gap-2">
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setSelected(proj)}
                  className={`flex items-center gap-3 border p-3 text-left transition-colors duration-200 w-full ${
                    selected.id === proj.id
                      ? "border-[#3D3367] bg-[#3D3367]/20"
                      : "border-[#1E293B] bg-[#0F172A] hover:border-[#3D3367]/60"
                  }`}
                >
                  <div className="w-16 h-12 bg-[#000013] flex-shrink-0 border border-[#1E293B]" />
                  <span className="text-xs text-[#94A3B8] leading-snug" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{proj.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
