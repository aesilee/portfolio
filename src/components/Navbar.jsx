export default function Navbar({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000013]/90 backdrop-blur-sm">
      <div className="flex items-center justify-center md:justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4">
        <div className="hidden md:block cursor-pointer" onClick={() => scrollTo("home")}>
          <svg width="52" height="36" viewBox="0 0 52 36">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <text x="0" y="26" fontSize="20" fill="#94A3B8" fontFamily="monospace" fontWeight="bold">&lt;</text>
            <text x="14" y="28" fontSize="24" fill="url(#logoGrad)" fontFamily="sans-serif" fontWeight="900">A</text>
            <text x="33" y="26" fontSize="20" fill="#94A3B8" fontFamily="monospace" fontWeight="bold">&gt;</text>
          </svg>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-mono text-sm md:text-sm tracking-wide transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#F8FAFC]"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button className="border border-[#94A3B8]/60 text-[#F8FAFC] text-sm px-3 sm:px-4 md:px-5 py-1.5 font-mono tracking-wide hover:bg-[#F8FAFC] hover:text-[#000013] transition-colors duration-200 rounded-md">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
