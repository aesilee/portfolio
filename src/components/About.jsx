export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-24">
      <div className="hidden md:block absolute left-[136px] lg:left-[156px] top-0 bottom-0 w-px bg-[#3D3367] z-0" />

      <div className="w-full px-6 sm:px-10 md:pl-[160px] lg:pl-[180px] xl:pl-[200px] pr-6 md:pr-12">
        <div className="relative z-10 flex items-center gap-3 mb-10">
          <div className="hidden md:block flex-shrink-0 -ml-[32px] relative z-10 bg-[#000013] px-[1px]">
            <svg width="16" height="16" viewBox="0 0 14 14">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#A78BFA" />
            </svg>
          </div>
          <h2
            className="text-[#A78BFA] text-2xl font-bold tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            About Me
          </h2>
        </div>

        <div className="flex gap-16 items-start">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <p className="text-[#94A3B8] text-sm leading-loose mb-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Hi! I'm{" "}
              <span className="text-[#EC4899]">Ashley Shad Tongco</span>
              , and I enjoy building systems that assist people and make daily life more convenient.
            </p>

            <p className="text-[#94A3B8] text-sm leading-loose mb-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              I have a strong creative side and genuinely enjoy designing—whether it's visuals, layouts,
              or user experiences. I've always had a passion for interior design, and who would've thought
              that the same eye for detail and aesthetics would translate into designing apps and websites.
              That artistic mindset, combined with being highly organized, helps me create clean, thoughtful,
              and user-friendly designs.
            </p>

            <p className="text-[#94A3B8] text-sm leading-loose mb-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Fast-forward to today, I've been focusing more on web development, mainly working with HTML,
              CSS, and JavaScript, where I continue to grow and refine my skills while bringing my ideas
              to life through code.
            </p>

            <button
              onClick={() => document.getElementById("techstack")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#3D3367] text-[#F8FAFC] text-sm px-6 py-3 hover:bg-[#3D3367]/40 transition-colors duration-200 tracking-wide rounded-md"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              View my Tech Stack
            </button>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-72">
              <div className="absolute top-3 left-3 w-full h-full border border-[#3D3367]" />
              <div className="relative w-full h-full border border-[#1E293B] overflow-hidden bg-[#0F172A]">
                <img
                  src="/ashley.jpg"
                  alt="Ashley Tongco"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background =
                      "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
