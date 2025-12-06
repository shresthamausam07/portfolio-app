"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["Python", "Java", "JavaScript", "C", "C++", "TypeScript"]
  },
  {
    title: "Frontend Technologies",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["HTML", "CSS", "SCSS", "jQuery", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["Node.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["AWS", "Docker", "Git", "Bash", "Netlify", "Vercel"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-center">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Proficient: English, Nepali, Newari, Hindi
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Conversational: Spanish
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}