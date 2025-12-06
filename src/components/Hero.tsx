"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
          Mausam Shrestha
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Founding Software Engineer @ Blue Collar Pro
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Computer Science major with a passion for building full-stack SaaS applications.
          Currently developing a construction estimation and marketplace platform using AWS, Docker, and modern web technologies.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button asChild>
            <a href="mailto:shrestham2@mymail.nku.edu">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/mausam-shrestha-26518821b/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/shresthamausam07" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge>Next.js</Badge>
          <Badge>TypeScript</Badge>
          <Badge>React</Badge>
          <Badge>Node.js</Badge>
          <Badge>AWS</Badge>
          <Badge>Docker</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>MongoDB</Badge>
        </div>
      </div>
    </section>
  );
}