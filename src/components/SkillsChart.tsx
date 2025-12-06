"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench, Globe, Cpu, Shield, Palette } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: React.ReactNode;
  color: string;
  experience: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-600",
    skills: [
      { name: "TypeScript", level: 95, category: "languages", color: "#3178c6", experience: "3+ years" },
      { name: "JavaScript", level: 98, category: "languages", color: "#f7df1e", experience: "4+ years" },
      { name: "Python", level: 85, category: "languages", color: "#3776ab", experience: "2+ years" },
      { name: "Java", level: 80, category: "languages", color: "#007396", experience: "2+ years" },
      { name: "C/C++", level: 75, category: "languages", color: "#00599c", experience: "2+ years" },
      { name: "SQL", level: 90, category: "languages", color: "#336791", experience: "3+ years" }
    ]
  },
  {
    title: "Frontend Technologies",
    icon: <Palette className="w-5 h-5" />,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "React.js", level: 95, category: "frontend", color: "#61dafb", experience: "3+ years" },
      { name: "Next.js", level: 92, category: "frontend", color: "#000000", experience: "2+ years" },
      { name: "HTML5", level: 98, category: "frontend", color: "#e34f26", experience: "4+ years" },
      { name: "CSS3/SCSS", level: 95, category: "frontend", color: "#1572b6", experience: "4+ years" },
      { name: "Tailwind CSS", level: 90, category: "frontend", color: "#06b6d4", experience: "2+ years" },
      { name: "Framer Motion", level: 85, category: "frontend", color: "#0055ff", experience: "1+ years" }
    ]
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-5 h-5" />,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Node.js", level: 90, category: "backend", color: "#339933", experience: "3+ years" },
      { name: "Express.js", level: 88, category: "backend", color: "#000000", experience: "3+ years" },
      { name: "PostgreSQL", level: 85, category: "database", color: "#336791", experience: "2+ years" },
      { name: "MongoDB", level: 82, category: "database", color: "#47a248", experience: "2+ years" },
      { name: "MySQL", level: 80, category: "database", color: "#4479a1", experience: "2+ years" },
      { name: "REST APIs", level: 92, category: "backend", color: "#02569b", experience: "3+ years" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "AWS", level: 85, category: "cloud", color: "#ff9900", experience: "2+ years" },
      { name: "Docker", level: 80, category: "devops", color: "#2496ed", experience: "1+ years" },
      { name: "Git", level: 95, category: "devops", color: "#f05032", experience: "4+ years" },
      { name: "Vercel", level: 90, category: "cloud", color: "#000000", experience: "2+ years" },
      { name: "Netlify", level: 85, category: "cloud", color: "#00c7b7", experience: "2+ years" },
      { name: "CI/CD", level: 75, category: "devops", color: "#40e0d0", experience: "1+ years" }
    ]
  }
];

const CircularProgress = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay * 100);
      return () => clearTimeout(timer);
    }
  }, [inView, delay, skill.level]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Background Circle */}
      <svg className="w-24 h-24 md:w-32 md:h-32 transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-muted opacity-20"
        />
        {/* Progress Circle */}
        <circle
          cx="50%"
          cy="50%"
          r="45"
          stroke={skill.color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg md:text-xl font-bold">{progress}%</span>
        <span className="text-xs text-muted-foreground hidden md:block">{skill.name}</span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-card border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
        <div className="text-sm font-medium">{skill.name}</div>
        <div className="text-xs text-muted-foreground">{skill.experience}</div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-t" />
      </div>
    </motion.div>
  );
};

export default function SkillsChart() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blueprint-bg opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Toolbox
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive visualization of my technical proficiency across different domains.
            Hover over any skill to see experience level.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`construction-border hover:shadow-lg transition-all duration-300 ${
                selectedCategory === category.title ? "ring-2 ring-primary/50" : ""
              }`}>
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.title ? null : category.title
                  )}
                >
                  <CardTitle className={`flex items-center gap-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    {category.title}
                    <span className="text-sm text-muted-foreground font-normal ml-auto">
                      {category.skills.length} skills
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Expanded View */}
                  <div className={`space-y-6 transition-all duration-500 ${
                    selectedCategory === category.title ? "max-h-96 opacity-100" : "max-h-40 opacity-60 overflow-hidden"
                  }`}>
                    <div className="grid grid-cols-3 gap-4 md:gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="flex flex-col items-center">
                          <CircularProgress
                            skill={skill}
                            delay={categoryIndex * 0.3 + skillIndex * 0.1}
                          />
                          <span className="text-xs text-muted-foreground mt-2 md:hidden">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs construction-border"
                            style={{ borderColor: skill.color + "40", color: skill.color }}
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* collapsed indicator */}
                  {selectedCategory !== category.title && (
                    <div className="text-center pt-4 border-t">
                      <span className="text-sm text-muted-foreground">
                        Click to expand skills
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <Code className="w-6 h-6" />, label: "Programming", value: "6+" },
            { icon: <Database className="w-6 h-6" />, label: "Databases", value: "4" },
            { icon: <Cloud className="w-6 h-6" />, label: "Cloud Platforms", value: "3" },
            { icon: <Cpu className="w-6 h-6" />, label: "Years Experience", value: "4" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg bg-card border construction-border"
            >
              <div className="w-12 h-12 mx-auto mb-3 p-3 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <Card className="construction-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                Languages & Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="font-medium">Proficient:</span>
                  <span className="ml-2 text-muted-foreground">English, Nepali, Newari, Hindi</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                  <span className="font-medium">Conversational:</span>
                  <span className="ml-2 text-muted-foreground">Spanish</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}