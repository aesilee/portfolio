import ashleyPhoto from "../../ashley.jpg";

function Diamond() {
  return (
    <svg className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" viewBox="0 0 14 14">
      <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#7c5fe6" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative flex items-center min-h-[78vh] lg:min-h-[82vh] py-10 lg:py-14">
      {/* Vertical line */}
      <div className="section-line hidden lg:block absolute left-[200px] top-0 bottom-0 w-px bg-[#3D3367] z-0" />

      <div className="px-6 sm:px-8 lg:pl-[210px] lg:pr-12 lg:translate-y-[120px]">
        <div className="relative z-10 flex items-center gap-3 mb-6">
          {/* Diamond */}
          <div className="hidden lg:block flex-shrink-0 lg:-ml-[22px] xl:-ml-[23px] min-[1500px]:-ml-[23px] 2xl:-ml-[25px] relative z-10 px-[1px]">
            <Diamond />
          </div>
          {/* Title */}
          <h2 className="font-mono text-[#a78bfa] text-lg sm:text-2xl font-bold tracking-widest">About Me</h2>
        </div>

        {/* Mobile: photo on top, Desktop: photo on right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          {/* Photo — shows first on mobile */}
          <div className="flex-shrink-0 lg:order-2">
            <div className="relative w-40 h-48 sm:w-52 sm:h-60 lg:w-64 lg:h-72">
              <div className="absolute top-3 left-3 w-full h-full border border-[#7c5fe6]/40 rounded-md" />
              <div className="relative w-full h-full border border-[#2a2a4a] overflow-hidden bg-[#0f0f2a] rounded-md">
                <img
                  src={ashleyPhoto}
                  alt="Ashley Tongco"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 lg:order-1 lg:pl-[20px]">
            <p className="font-mono text-gray-300 text-xs sm:text-sm leading-loose mb-4">
              Hi! I'm <span className="text-[#89CFF0]">Ashley Shad Tongco</span>, and I enjoy building
              systems that assist people and make daily life more convenient.
            </p>
            <p className="font-mono text-gray-300 text-xs sm:text-sm leading-loose mb-4">
              I have a strong creative side and genuinely enjoy designing—whether it's visuals, layouts,
              or user experiences. I've always had a passion for interior design, and who would've thought
              that the same eye for detail and aesthetics would translate into designing apps and websites.
              That artistic mindset, combined with being highly organized, helps me create clean, thoughtful,
              and user-friendly designs.
            </p>
            <p className="font-mono text-gray-300 text-xs sm:text-sm leading-loose mb-8">
              Fast-forward to today, I've been focusing more on web development, mainly working with HTML,
              CSS, and JavaScript, where I continue to grow and refine my skills while bringing my ideas
              to life through code.
            </p>
            <button
              onClick={() => document.getElementById("techstack")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#7c5fe6] text-white font-mono text-xs sm:text-sm px-5 py-2.5 hover:bg-[#7c5fe6]/20 transition-colors tracking-wide rounded-md">
              View my Tech Stack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}