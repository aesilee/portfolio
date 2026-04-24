const techCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
  {
    title: "UI/UX",
    items: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Office Tools",
    items: [
      { name: "Excel", icon: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png" },
      { name: "Airtable", icon: "https://img.icons8.com/color/96/airtable.png" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
      { name: "Notion", icon: "https://img.icons8.com/color/96/notion--v1.png" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "SMSS", icon: "https://img.icons8.com/color/96/microsoft-sql-server.png" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PocketBase", icon: "https://pocketbase.io/images/logo.svg" },
    ],
  },
  {
    title: "IDEs",
    items: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
      { name: "Rider", icon: "https://img.icons8.com/color/96/jetbrains-rider.png" },
      { name: "Cursor", icon: "https://img.icons8.com/fluency/96/cursor.png" },
    ],
  },
];

function TechItem({ name, icon, invert }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 min-w-[80px]">
      <img
        src={icon}
        alt={name}
        className={`w-12 h-12 object-contain ${invert ? "filter invert brightness-75" : ""}`}
        onError={(e) => {
          e.target.src = "https://img.icons8.com/color/96/source-code.png";
        }}
      />
      <span className="text-[10px] text-[#94A3B8] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{name}</span>
    </div>
  );
}

function CategoryBlock({ title, items }) {
  return (
    <div className="flex-1 min-w-[200px]">
      <p className="text-xs text-[#94A3B8] mb-3 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{title}</p>
      <div className="border border-[#1E293B] bg-[#0F172A] flex flex-wrap">
        {items.map((item) => (
          <TechItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const row1 = techCategories.slice(0, 3);
  const row2 = techCategories.slice(3, 5);
  const row3 = techCategories.slice(5, 7);

  return (
    <section id="techstack" className="relative min-h-screen flex items-center py-24">
      <div className="hidden md:block absolute left-[136px] lg:left-[156px] top-0 bottom-0 w-px bg-[#3D3367] z-0" />

      <div className="w-full px-6 sm:px-10 md:pl-[160px] lg:pl-[180px] xl:pl-[200px] pr-6 md:pr-12">
        <div className="relative z-10 flex items-center gap-3 mb-1">
          <div className="hidden md:block flex-shrink-0 -ml-[32px] relative z-10 bg-[#000013] px-[1px]">
            <svg width="16" height="16" viewBox="0 0 14 14">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#A78BFA" />
            </svg>
          </div>
          <h2 className="text-[#A78BFA] text-2xl font-bold tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Tech Stack
          </h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Tools &amp; Technologies I work with
        </p>

        <div className="flex gap-6 mb-6 flex-wrap">
          {row1.map((cat) => <CategoryBlock key={cat.title} {...cat} />)}
        </div>
        <div className="flex gap-6 mb-6 flex-wrap">
          {row2.map((cat) => <CategoryBlock key={cat.title} {...cat} />)}
        </div>
        <div className="flex gap-6 flex-wrap">
          {row3.map((cat) => <CategoryBlock key={cat.title} {...cat} />)}
        </div>
      </div>
    </section>
  );
}
