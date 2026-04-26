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
      { name: "Airtable", icon: null, viewBox: "0 0 24 24", svg: `<path fill="#ffbf00" d="M10.743575 2.418595 1.9821575 6.04395c-0.487225 0.20165 -0.4821775 0.8937 0.008105 1.088025L10.78835 10.620925c0.773075 0.306575 1.63395 0.306575 2.4069 0l8.7982 -3.48895c0.49015 -0.194325 0.495325 -0.886375 0.007975 -1.088025L13.24015 2.418595c-0.7994 -0.33075 -1.697325 -0.33075 -2.496575 0Z" stroke-width="0.25"></path><path fill="#26b5f8" d="M12.77235 12.5261v8.71585c0 0.414575 0.418 0.698425 0.80335 0.545675l9.80375 -3.80535c0.223825 -0.08875 0.3706 -0.304975 0.3706 -0.545675V8.72075c0 -0.414575 -0.418025 -0.698425 -0.803375 -0.545675l-9.80375 3.80535c-0.223675 0.088725 -0.370575 0.304975 -0.370575 0.545675Z" stroke-width="0.25"></path><path fill="#ed3049" d="m10.48305 12.97585 -2.909525 1.404825 -0.295425 0.142775L1.13625 17.466325C0.7469225 17.65415 0.25 17.370425 0.25 16.937925V8.757375c0 -0.156475 0.08023 -0.29155 0.1878225 -0.3933 0.0448975 -0.045025 0.0957725 -0.0821 0.14864 -0.11145 0.1467775 -0.088075 0.35612 -0.111575 0.5341125 -0.041175l9.3136 3.690175c0.4734 0.187825 0.5106 0.8512 0.048875 1.074225Z" stroke-width="0.25"></path>` },
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
      { name: "Rider", icon: "https://resources.jetbrains.com/storage/products/rider/img/meta/rider_logo_300x300.png" },
      { name: "Cursor", icon: null, svg: '<path d="m20.42,6.73L12.42,2.11c-.26-.15-.57-.15-.83,0L3.58,6.73c-.22.12-.35.36-.35.61v9.32c0,.25.13.48.35.61l8.01,4.62c.26.15.57.15.83,0l8.01-4.62c.22-.12.35-.36.35-.61V7.34c0-.25-.13-.48-.35-.61h0Zm-.5.98h0s-7.73,13.39-7.73,13.39c-.05.09-.19.05-.19-.05v-8.77c0-.18-.09-.34-.25-.43l-7.59-4.38c-.09-.05-.05-.19.05-.19h15.46c.22,0,.36.24.25.43Z"/>' },
    ],
  },
];

function TechItem({ name, icon, invert, svg }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 flex-shrink-0">
      {svg ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 lg:w-11 lg:h-11 2xl:w-12 2xl:h-12"
          fill="white"
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <img
          src={icon}
          alt={name}
          className={`w-10 h-10 lg:w-11 lg:h-11 2xl:w-12 2xl:h-12 object-contain ${invert ? "filter invert brightness-75" : ""}`}
          onError={(e) => {
            e.target.src = "https://img.icons8.com/color/96/source-code.png";
          }}
        />
      )}
      <span className="text-[10px] text-[#94A3B8] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{name}</span>
    </div>
  );
}

function CategoryBlock({ title, items }) {
  return (
    <div className="w-full xl:flex-1">
      <p className="text-xs text-[#94A3B8] mb-3 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{title}</p>
      <div className="border border-[#1E293B] bg-transparent flex flex-nowrap overflow-x-auto rounded-md">
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
    <section id="techstack" className="relative flex items-center min-h-[78vh] lg:min-h-[82vh] pt-10 pb-36 lg:pt-14 lg:pb-48">
      <div className="section-line hidden lg:block absolute left-[200px] top-0 bottom-0 w-px bg-[#3D3367] z-0" />

      <div className="w-full px-6 sm:px-10 lg:pl-[210px] pr-6 lg:pr-12 lg:translate-y-[120px]">
        <div className="relative z-10 flex items-center gap-3 mb-1">

          {/* Diamond */}
          <div className="hidden lg:block flex-shrink-0 lg:-ml-[22px] xl:-ml-[23px] min-[1500px]:-ml-[23px] 2xl:-ml-[25px] relative z-10 px-[1px]">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" viewBox="0 0 14 14">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#A78BFA" />
            </svg>
          </div>

          <h2 className="text-[#A78BFA] text-2xl font-bold tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Tech Stack
          </h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-10 lg:ml-[18px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}> 
          Tools &amp; Technologies I work with
        </p>

        <div className="flex flex-col xl:flex-row gap-6 mb-6 lg:ml-[20px]">
          {row1.map((cat) => <CategoryBlock key={cat.title} {...cat} />)}
        </div>
        <div className="flex flex-col xl:flex-row gap-6 mb-6 lg:ml-[20px]">
          {row2.map((cat) => <CategoryBlock key={cat.title} {...cat} />)}
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lg:ml-[20px]">
          {row3.map((cat) => <CategoryBlock key={cat.title} {...cat} />)}
        </div>
      </div>
    </section>
  );
}
