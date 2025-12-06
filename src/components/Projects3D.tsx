"use client";

import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Eye, Layers, Zap } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  livePreview?: string;
  category: "frontend" | "fullstack" | "personal";
  featured: boolean;
  color: string;
  icon: React.ReactNode;
}

const projectsData: Project[] = [
  {
    id: "blue-collar-pro",
    title: "Blue Collar Pro",
    description: "Revolutionary SaaS platform for construction estimation and marketplace. Real-time collaboration, advanced project management, and comprehensive cost analysis tools built for modern construction professionals.",
    technologies: ["Next.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "React"],
    link: "https://thebluecollarpro.com",
    category: "fullstack",
    featured: true,
    color: "from-blue-500 to-purple-600",
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: "chatbcp",
    title: "ChatBCP",
    description: "AI-powered chat assistant for Blue Collar Pro platform, providing intelligent construction insights, project recommendations, and real-time support for construction professionals using advanced NLP technologies.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "WebSocket", "PostgreSQL", "Tailwind CSS"],
    link: "https://chatbcp.com",
    category: "fullstack",
    featured: true,
    color: "from-emerald-500 to-cyan-600",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: "ai-sentiment-analysis",
    title: "AI Sentiment Analysis",
    description: "Automated classification of Amazon Electronics product reviews as Positive, Negative, or Neutral. Compares VADER rule-based lexicon model with RoBERTa transformer-based deep learning model for sentiment analysis, evaluating performance on balanced datasets.",
    technologies: ["Python", "RoBERTa", "VADER", "NLTK", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/shresthamausam07/ai-sentiment-app.git",
    category: "fullstack",
    featured: true,
    color: "from-yellow-500 to-orange-600",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: "frontend-collection",
    title: "Interactive Frontend Collection",
    description: "Dynamic collection of 20+ frontend projects showcasing advanced UI components, animations, and interactive experiences. Features drag-and-drop interfaces, real-time data visualization, and responsive design patterns.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "WebGL", "Canvas API"],
    link: "https://github.com/shresthamausam07?tab=repositories",
    category: "frontend",
    featured: false,
    color: "from-green-500 to-teal-600",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website V1",
    description: "Modern portfolio built with MERN stack and Netlify CMS for content management. Features custom animations, dark mode, project filtering, and optimized performance scores.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Netlify CMS"],
    link: "https://shresthamausam.netlify.app",
    github: "https://github.com/shresthamausam07/portfolio",
    category: "fullstack",
    featured: false,
    color: "from-orange-500 to-red-600",
    icon: <Eye className="w-6 h-6" />
  },
  {
    id: "personal-blog",
    title: "Technical Blog Platform",
    description: "Content-rich blog platform built with Next.js and Sanity CMS. Features Markdown support, code syntax highlighting, SEO optimization, and real-time content updates.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel", "MDX"],
    link: "https://portrayedwords.vercel.app",
    category: "fullstack",
    featured: false,
    color: "from-purple-500 to-pink-600",
    icon: <Zap className="w-6 h-6" />
  }
];

// Memoized individual card component to prevent re-renders
const ProjectCard = memo(({
  project,
  index,
  isFlipped,
  onCardFlip,
  onLinkClick
}: {
  project: Project;
  index: number;
  isFlipped: boolean;
  onCardFlip: (projectId: string) => void;
  onLinkClick: (href: string) => void;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCardFlip(project.id);
  }, [project.id, onCardFlip]);

  const handleLinkClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(href, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-96 md:h-[28rem] cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        onClick={handleCardClick}
      >
        {/* Front of Card */}
        <motion.div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br p-6 text-white overflow-hidden ${project.color}`}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent),
                linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)
              `,
              backgroundSize: '20px 20px'
            }} />
          </div>

          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col pointer-events-none">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 md:p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                {project.icon}
              </div>
              {project.featured && (
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs md:text-sm pointer-events-auto">
                  Featured
                </Badge>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 text-xs px-2 py-1"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-xs px-2 py-1">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-auto pointer-events-auto">
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs md:text-sm px-3 py-2"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onCardFlip(project.id);
                }}
              >
                <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Details
              </Button>
              {project.link && (
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-xs md:text-sm px-3 py-2"
                  type="button"
                  onClick={(e) => handleLinkClick(e, project.link!)}
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </motion.div>

        {/* Back of Card - Detailed View */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-card border border-border p-4 md:p-6 flex flex-col"
          animate={{
            rotateY: isFlipped ? 0 : -180,
          }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg md:text-2xl font-bold mb-3 gradient-text line-clamp-2">{project.title}</h3>

          {/* Full Technology Stack */}
          <div className="mb-4">
            <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-2">Technology Stack</h4>
            <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="construction-border text-xs px-2 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Extended Description */}
          <div className="mb-4 flex-grow overflow-y-auto max-h-32">
            <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-2">Key Features</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex gap-2 mt-auto">
            {project.link && (
              <Button
                size="sm"
                className="flex-1 text-xs md:text-sm"
                type="button"
                onClick={(e) => handleLinkClick(e, project.link!)}
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Live Demo
              </Button>
            )}
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs md:text-sm"
                type="button"
                onClick={(e) => handleLinkClick(e, project.github!)}
              >
                <Github className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default function Projects3D() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const handleCardFlip = useCallback((projectId: string) => {
    setSelectedProject(prev => prev === projectId ? null : projectId);
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
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
            Project Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive 3D cards showcasing my work. Click any card to explore detailed information and flip for more insights.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { id: "all", label: "All Projects" },
            { id: "fullstack", label: "Full Stack" },
            { id: "frontend", label: "Frontend" },
            { id: "personal", label: "Personal" }
          ].map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="construction-border"
                onClick={() => setSelectedCategory(category.id)}
                type="button"
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFlipped={selectedProject === project.id}
              onCardFlip={handleCardFlip}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Click cards to flip and explore • More projects coming soon
            </span>
            <Zap className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}