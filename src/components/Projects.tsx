"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    title: "Front-end Projects Collection",
    description: "A collection of front-end projects built with HTML, CSS, and JavaScript, demonstrating various UI components and functionality including Clock, To-Do List, Expanding Cards, Drag and Drop, Progress Bar, and more.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    link: "https://github.com/shresthamausam07?tab=repositories"
  },
  {
    title: "Personal Portfolio Website",
    description: "A visually appealing portfolio website, built with the MERN stack, and using Netlify CMS for content management. Hosted on Netlify.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Netlify CMS"],
    link: "https://shresthamausam.netlify.app"
  },
  {
    title: "Personal Blog",
    description: "A blog featuring writing samples and interests, built with the MERN stack using Next.js as the React framework, and leveraging Sanity CMS for content management. Hosted on Vercel.",
    technologies: ["Next.js", "React", "Node.js", "Sanity CMS", "Vercel"],
    link: "https://portrayedwords.vercel.app"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}