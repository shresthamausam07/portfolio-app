"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Founding Software Engineer",
    company: "Blue Collar Pro",
    location: "Remote",
    period: "Present",
    description: [
      "Building a SaaS platform for construction estimation and marketplace",
      "Developing full-stack application using modern web technologies",
      "Implementing cloud infrastructure with AWS EC2 and Docker",
      "Designing scalable database architecture and API systems"
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Node.js"]
  },
  {
    title: "Research Assistant",
    company: "Adaptive Testing Remediation System, Northern Kentucky University",
    location: "Highland Heights, KY",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Developed a full-stack web application using MERN stack (Express.js, React.js, Node.js) and Java for the API",
      "Designed and implemented a PostgreSQL database system to store and manage data",
      "Implemented user authentication and encryption for secure registration and login functionalities",
      "Contributed to the initial setup and foundation of the web application for the research project"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "PostgreSQL", "Java"]
  },
  {
    title: "Business Services Employee",
    company: "NKU Campus Recreation Center",
    location: "Highland Heights, KY",
    period: "Sept 2023 - Present",
    description: [
      "Handled memberships, registrations, and financial transactions using CSI software efficiently",
      "Managed locker rental database, overseeing clean-outs each semester and ensuring organization",
      "Collaborated with staff to implement new policies and procedures"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mt-1">
                      {experience.company}
                    </CardDescription>
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
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{desc}</span>
                    </li>
                  ))}
                </ul>
                {experience.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}