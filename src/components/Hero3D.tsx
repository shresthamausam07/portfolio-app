"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Construction, Code2, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import gsap from "gsap";

export default function Hero3D() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });

        if (titleRef.current) {
          gsap.to(titleRef.current, {
            rotationY: x * 10,
            rotationX: -y * 10,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const createParticle = (e: React.MouseEvent) => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.backgroundColor = theme === "dark" ? "#3b82f6" : "#ea580c";
    particle.style.borderRadius = "50%";
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 4000);
  };

  const floatingIcons = [
    { Icon: Code2, delay: 0, position: "top-20 left-10" },
    { Icon: Cloud, delay: 0.5, position: "top-32 right-20" },
    { Icon: Construction, delay: 1, position: "bottom-20 left-20" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-bg"
      onMouseMove={(e) => createParticle(e)}
    >
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} opacity-10`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={60} />
        </motion.div>
      ))}

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* 3D Rotating Name */}
        <div className="perspective-1000 mb-8">
          <motion.h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold inline-block gradient-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            MAUSAM
            <br />
            SHRESTHA
          </motion.h1>
        </div>

        {/* Typewriter Effect for Role */}
        <motion.div
          className="mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground font-mono"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-primary">|</span> Founding Software Engineer
          </motion.p>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Building the future of construction technology at{" "}
          <span className="text-primary font-bold">Blue Collar Pro</span>.
          Computer Science major passionate about creating innovative SaaS solutions
          that transform how construction professionals work and collaborate.
        </motion.p>

        {/* Interactive Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="relative overflow-hidden group" asChild>
              <a href="mailto:shrestham2@mymail.nku.edu">
                <Mail className="mr-2 h-5 w-5" />
                Let's Build Together
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="construction-border" asChild>
              <a href="https://www.linkedin.com/in/mausam-shrestha-26518821b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="construction-border" asChild>
              <a href="https://github.com/shresthamausam07" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Tech Skills */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {[
            "Next.js", "TypeScript", "React", "Node.js",
            "AWS", "Docker", "PostgreSQL", "MongoDB", "Blue Collar Pro"
          ].map((skill, index) => (
            <motion.div
              key={skill}
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
            >
              <Badge
                variant="secondary"
                className="text-sm px-4 py-2 construction-border floating"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mouse Parallax Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle 600px at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(59, 130, 246, 0.3), transparent 50%)`,
        }}
      />
    </section>
  );
}