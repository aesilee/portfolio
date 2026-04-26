export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">

      {/* Vertical line — desktop only */}
      <div className="hidden md:block absolute left-[200px] lg:left-[200px] top-[39%] bottom-0 w-px bg-[#3D3367] z-0" />

      <div className="w-full pt-24 pb-16 px-6 sm:px-10 md:pl-[220px]">

        {/* Greeting row */}
        <div className="relative z-10 flex items-center gap-3 mb-5 md:-ml-[10px]">
          <div className="hidden md:block flex-shrink-0 -ml-[22px] relative z-10 bg-[#000013] px-[1px]">
            <svg width="24" height="24" viewBox="0 0 14 14">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#A78BFA" />
            </svg>
          </div>
          <span className="text-[#A78BFA] text-xs sm:text-sm tracking-[0.2em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Hi, my name is
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#F8FAFC] mb-3 leading-tight md:ml-[10px]"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}>
          Ashley Tongco
        </h1>

        {/* Title */}
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-[#94A3B8] mb-6 md:ml-[10px]"
          style={{ fontFamily: "'Poppins', sans-serif" }}>
          Front End Developer &amp; UI/UX Designer
        </h2>

        {/* Bio */}
        <p className="text-[#F8FAFC] text-xs sm:text-sm leading-relaxed max-w-xl md:ml-[10px]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          I design and develop modern interfaces that are
          both functional and visually compelling. Passionate about
          creating smooth user experiences through code and design.
        </p>

      </div>
    </section>
  );
}