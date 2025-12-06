"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MS</span>
            </div>
            <span className="font-semibold text-lg">Mausam Shrestha</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Education
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/mausam-shrestha-26518821b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/shresthamausam07" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:shrestham2@mymail.nku.edu">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}