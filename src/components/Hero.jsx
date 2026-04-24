export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">

      {/* Vertical line — left edge */}
      <div className="hidden md:block absolute left-[136px] lg:left-[156px] top-[calc(50%-5.60rem)] bottom-0 w-px bg-[#3D3367] z-0" />

      {/* Content */}
      <div className="w-full pt-24 pb-16 px-6 sm:px-10 md:pl-[160px] lg:pl-[180px] xl:pl-[200px]">

        {/* Greeting row — diamond + text side by side */}
        <div className="relative z-10 flex items-center gap-3 mb-5">
          <div className="hidden md:block flex-shrink-0 -ml-[32px] relative z-10 bg-[#000013] px-[1px]">
            <svg width="16" height="16" viewBox="0 0 14 14">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#A78BFA" />
            </svg>
          </div>
          <span
            className="text-[#A78BFA] text-sm tracking-[0.2em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Hi, my name is
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-3 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}
        >
          Ashley Tongco
        </h1>

        {/* Title */}
        <h2
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#94A3B8] mb-8"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Front End Developer &amp; UI/UX Designer
        </h2>

        {/* Bio */}
        <p
          className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          I design and develop modern interfaces that are<br className="hidden sm:block" />
          both functional and visually compelling. Passionate about<br className="hidden sm:block" />
          creating smooth user experiences through code and design.
        </p>

      </div>
    </section>
  );
}