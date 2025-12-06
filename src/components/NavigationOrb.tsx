"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Home, Briefcase, Code, GraduationCap, Wrench, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <Home size={20} />, href: "#home" },
  { id: "education", label: "Education", icon: <GraduationCap size={20} />, href: "#education" },
  { id: "experience", label: "Experience", icon: <Briefcase size={20} />, href: "#experience" },
  { id: "projects", label: "Projects", icon: <Code size={20} />, href: "#projects" },
  { id: "skills", label: "Skills", icon: <Wrench size={20} />, href: "#skills" },
  { id: "contact", label: "Contact", icon: <MessageCircle size={20} />, href: "#contact" },
];

export default function NavigationOrb() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Floating Navigation Orb */}
      <motion.div
        className="fixed z-50 flex items-center justify-center"
        style={{
          top: "2rem",
          right: "2rem",
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        {/* Progress Ring */}
        <svg className="absolute -inset-4 w-24 h-24 -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-muted opacity-20"
          />
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 36}`}
            strokeDashoffset={`${2 * Math.PI * 36 * (1 - scrollProgress / 100)}`}
            className="text-primary transition-all duration-300"
          />
        </svg>

        {/* Main Orb */}
        <motion.button
          className="relative w-20 h-20 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center construction-border"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Expandable Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-24 right-0 min-w-[200px]"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card border rounded-lg shadow-xl p-2 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    onMouseEnter={() => setShowTooltip(item.id)}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-card border rounded-lg shadow-xl p-2 mt-2">
                <div className="flex justify-around">
                  <motion.a
                    href="https://github.com/shresthamausam07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mausam-shrestha-26518821b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1, rotate: -15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    href="mailto:shrestham2@mymail.nku.edu"
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Navigation Dots (Mobile Alternative) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`relative w-3 h-3 rounded-full border-2 transition-all ${
                activeSection === item.id
                  ? "bg-primary border-primary"
                  : "bg-transparent border-muted-foreground hover:border-primary"
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => scrollToSection(item.href)}
              onMouseEnter={() => setShowTooltip(item.id)}
              onMouseLeave={() => setShowTooltip(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip === item.id && (
                  <motion.div
                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-card border rounded px-2 py-1 text-xs whitespace-nowrap"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Scroll Progress Bar (Top) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <motion.div
          className="h-full bg-primary origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />
      </div>
    </>
  );
}