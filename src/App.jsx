import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Toast from "./components/Toast";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      document.documentElement.style.setProperty("--scroll-progress", progress.toString());

      const sections = ["home", "about", "projects", "contact", "techstack"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact", "techstack"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section, index) => {
      section.classList.add("scroll-reveal");
      section.style.setProperty("--reveal-delay", `${index * 120}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncGlobalLineTop = () => {
      const anchor = document.getElementById("hero-line-anchor");
      const appRoot = document.getElementById("app-root");
      if (!anchor || !appRoot) return;

      const appTop = appRoot.getBoundingClientRect().top + window.scrollY;
      const anchorRect = anchor.getBoundingClientRect();
      const anchorCenterY = anchorRect.top + window.scrollY + (anchorRect.height / 2);
      const top = Math.max(anchorCenterY - appTop, 0);

      document.documentElement.style.setProperty("--global-line-top", `${top}px`);
    };

    syncGlobalLineTop();
    window.addEventListener("resize", syncGlobalLineTop);
    window.addEventListener("orientationchange", syncGlobalLineTop);
    window.setTimeout(syncGlobalLineTop, 50);
    window.setTimeout(syncGlobalLineTop, 300);

    return () => {
      window.removeEventListener("resize", syncGlobalLineTop);
      window.removeEventListener("orientationchange", syncGlobalLineTop);
    };
  }, []);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    window.setTimeout(() => {
      setToast({ show: false, type: "success", message: "" });
    }, 2800);
  };

  return (
    <div id="app-root" className="relative bg-[#000013] min-h-screen text-white font-mono">
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div
        className="global-section-line hidden lg:block absolute left-[200px] bottom-0 w-px bg-[#3D3367] z-0"
        style={{ top: "var(--global-line-top, 39vh)" }}
      />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Contact onToast={showToast} />
      <TechStack />
      <Toast toast={toast} />
    </div>
  );
}
