"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Construction, Building, Users, Database, Cloud, ArrowRight } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  icon: React.ReactNode;
  type: "current" | "past" | "education";
  featured?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Founding Software Engineer",
    company: "Blue Collar Pro",
    location: "Remote",
    period: "2024 - Present",
    description: [
      "Architecting and building a SaaS platform for construction estimation and marketplace",
      "Leading full-stack development using Next.js, TypeScript, and AWS",
      "Implementing cloud infrastructure with Docker containers and CI/CD pipelines",
      "Designing scalable database architecture for real-time collaboration"
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Node.js", "React"],
    icon: <Construction className="w-6 h-6" />,
    type: "current",
    featured: true
  },
  {
    title: "Bachelor of Science - Computer Science",
    company: "Northern Kentucky University",
    location: "Highland Heights, KY",
    period: "2021 - 2025 (Expected)",
    description: [
      "Double Minor in Mathematics and Economics",
      "GPA: 3.65",
      "Focus on software engineering and distributed systems",
      "Active member of ACM and Honors Student Association"
    ],
    icon: <Building className="w-6 h-6" />,
    type: "education"
  },
  {
    title: "Research Assistant",
    company: "Adaptive Testing Remediation System, NKU",
    location: "Highland Heights, KY",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Developed full-stack web application using MERN stack and Java APIs",
      "Designed PostgreSQL database system for educational data management",
      "Implemented secure authentication and encryption systems",
      "Contributed to research project foundation and architecture"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "PostgreSQL", "Java"],
    icon: <Database className="w-6 h-6" />,
    type: "past"
  },
  {
    title: "Cambridge International AS & A Level",
    company: "St. Xavier College",
    location: "Kathmandu, Nepal",
    period: "2018 - 2020",
    description: [
      "GPA: 3.8",
      "Focused on Mathematics, Physics, and Computer Science",
      "Fr. Allan Star Memorial Award for Excellence in Extracurriculars"
    ],
    icon: <Building className="w-6 h-6" />,
    type: "education"
  },
  {
    title: "Business Services Employee",
    company: "NKU Campus Recreation Center",
    location: "Highland Heights, KY",
    period: "Sept 2023 - Present",
    description: [
      "Manage memberships and financial transactions using CSI software",
      "Oversee locker rental database and organizational systems",
      "Collaborate on policy implementation and procedural improvements"
    ],
    icon: <Users className="w-6 h-6" />,
    type: "current"
  }
];

export default function ExperienceTimeline() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Blueprint Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="blueprint-bg h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Build Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every experience adds another layer to the foundation. From education to innovation,
            each step has been crucial in constructing my expertise.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.3,
              });

              const isLeft = index % 2 === 0;
              const isFeatured = experience.featured;

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col gap-8`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 ${
                        experience.type === "current"
                          ? "bg-primary border-primary"
                          : experience.type === "education"
                          ? "bg-secondary border-secondary"
                          : "bg-muted border-muted"
                      } ${isFeatured ? "ring-4 ring-primary/50" : ""}`}
                      whileHover={{ scale: 1.5 }}
                      animate={experience.type === "current" ? {
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
                  >
                    <Card className={`construction-border cursor-pointer transition-all duration-300 ${
                      isFeatured ? "ring-2 ring-primary/50 shadow-lg shadow-primary/10" : ""
                    } ${
                      selectedExperience === index ? "scale-105" : ""
                    }`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              experience.type === "current"
                                ? "bg-primary/10 text-primary"
                                : experience.type === "education"
                                ? "bg-secondary/10 text-secondary"
                                : "bg-muted/10 text-muted-foreground"
                            }`}>
                              {experience.icon}
                            </div>
                            <div>
                              <CardTitle className={`text-lg ${isFeatured ? "gradient-text" : ""}`}>
                                {experience.title}
                              </CardTitle>
                              <CardDescription className="text-base font-medium text-primary">
                                {experience.company}
                              </CardDescription>
                            </div>
                          </div>
                          {experience.type === "current" && (
                            <Badge variant="default" className="animate-pulse">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {/* Expandable Content */}
                        <motion.div
                          className="space-y-4"
                          initial={{ height: "auto" }}
                          animate={{ height: selectedExperience === index ? "auto" : "auto" }}
                        >
                          <ul className="space-y-2">
                            {experience.description.map((desc, descIndex) => (
                              <motion.li
                                key={descIndex}
                                className="flex items-start gap-2 text-muted-foreground"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: descIndex * 0.1 }}
                              >
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{desc}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {experience.technologies && (
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                                >
                                  <Badge variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Construction Progress Indicator */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Construction className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Foundation Complete • Building Next Level
            </span>
            <Construction className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}