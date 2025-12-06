"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In Touch
        </h2>
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Let's Connect!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology and software development. Feel free to reach out!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:shrestham2@mymail.nku.edu">
                  <Mail className="mr-2 h-5 w-5" />
                  shrestham2@mymail.nku.edu
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="tel:347-981-5194">
                  <Phone className="mr-2 h-5 w-5" />
                  347-981-5194
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/mausam-shrestha-26518821b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href="https://github.com/shresthamausam07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}