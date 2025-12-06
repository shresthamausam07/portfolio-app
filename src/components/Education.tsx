"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science - BS, Computer Science",
    institution: "Northern Kentucky University",
    location: "Highland Heights, KY",
    period: "May 2025",
    gpa: "3.65",
    details: [
      "Double Minor, Mathematics and Economics"
    ]
  },
  {
    degree: "Cambridge International AS & A Level Certificate",
    institution: "St. Xavier College",
    location: "Kathmandu, Nepal",
    period: "May 2020",
    gpa: "3.8"
  }
];

export default function Education() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((education, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg md:text-xl">{education.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary mt-1">
                      {education.institution}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </div>
                  </div>
                  {education.gpa && (
                    <Badge variant="secondary" className="w-fit">
                      GPA: {education.gpa}
                    </Badge>
                  )}
                  {education.details && (
                    <ul className="space-y-1">
                      {education.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
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