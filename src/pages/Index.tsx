import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectModal from "@/components/ProjectModal";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(key);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [{
    title: "Mobile Banking App",
    description: "Secure banking application built with React Native",
    longDescription: "A comprehensive mobile banking solution that provides secure transactions, real-time account updates, and seamless user experience. Features include biometric authentication, instant transfers, bill payments, and detailed transaction history.",
    media: [
      { type: "video", url: "https://example.com/banking-app-demo.mp4" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" }
    ],
    tech: ["React Native", "JavaScript", "API Integration"]
  }, {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution",
    longDescription: "A scalable e-commerce platform built with modern technologies. Features include product management, shopping cart, secure checkout, order tracking, and admin dashboard for inventory management.",
    media: [
      { type: "video", url: "https://example.com/ecommerce-demo.mp4" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" }
    ],
    tech: ["Java", "Spring Boot", "React"]
  }, {
    title: "Task Management System",
    description: "Enterprise task management application",
    longDescription: "An enterprise-grade task management system that helps teams collaborate effectively. Includes features like task assignment, progress tracking, deadline management, and detailed reporting.",
    media: [
      { type: "video", url: "https://example.com/task-demo.mp4" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" }
    ],
    tech: ["Java", "React", "PostgreSQL"]
  }, {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform",
    longDescription: "An intelligent analytics dashboard that processes and visualizes complex data in real-time. Features machine learning algorithms for predictive analytics and customizable reporting tools.",
    media: [
      { type: "video", url: "https://example.com/analytics-demo.mp4" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" }
    ],
    tech: ["Python", "TensorFlow", "React", "D3.js"]
  }, {
    title: "Social Media Platform",
    description: "Feature-rich social networking app",
    longDescription: "A modern social media platform with real-time messaging, post sharing, and multimedia content support. Includes advanced features like story sharing and live streaming.",
    media: [
      { type: "video", url: "https://example.com/social-demo.mp4" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" }
    ],
    tech: ["React Native", "Node.js", "MongoDB"]
  }, {
    title: "Smart Home Control System",
    description: "IoT-based home automation solution",
    longDescription: "An intelligent home automation system that allows users to control various smart devices through a single interface. Features include schedule management, energy monitoring, and voice control.",
    media: [
      { type: "video", url: "https://example.com/smarthome-demo.mp4" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" },
      { type: "image", url: "/placeholder.svg" }
    ],
    tech: ["React", "Node.js", "MQTT", "IoT"]
  }];

  const skills = [{
    name: "Java",
    level: 90
  }, {
    name: "JavaScript",
    level: 85
  }, {
    name: "React Native",
    level: 88
  }, {
    name: "Spring Boot",
    level: 82
  }, {
    name: "Mobile Development",
    level: 85
  }, {
    name: "API Design",
    level: 80
  }];

  return (
    <div className="min-h-screen">
      <div className="bg-pattern" />
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="pt-24">
        <section ref={sectionRefs.home} className="container mx-auto px-6 py-20">
          <HeroSection onViewProjects={() => handleNavClick("projects")} />
        </section>

        <section ref={sectionRefs.about} className="container mx-auto px-6 py-20 bg-secondary/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Pakistan, I specialize in developing high-performance mobile and web applications.
              With extensive experience in Java, JavaScript, and React Native, I focus on creating
              seamless user experiences that drive business growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-lg">
                <Laptop className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Web Development</h3>
                <p className="text-sm text-muted-foreground">
                  Building responsive and scalable web applications
                </p>
              </div>
              <div className="glass p-6 rounded-lg">
                <Smartphone className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Mobile Development</h3>
                <p className="text-sm text-muted-foreground">
                  Creating native mobile experiences
                </p>
              </div>
              <div className="glass p-6 rounded-lg">
                <Network className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">API Design</h3>
                <p className="text-sm text-muted-foreground">
                  Developing robust and secure APIs
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map(skill => (
                <div key={skill.name} className="relative">
                  <div className="skill-item">
                    {skill.name}
                    <span className="ml-2 text-xs opacity-60">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section ref={sectionRefs.projects} className="container mx-auto px-6 py-20 bg-secondary/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card glass cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.media[0].type === "video" ? project.media[1].url : project.media[0].url} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section ref={sectionRefs.contact} className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in working together? Let's discuss your project.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                Contact Me <ArrowRight size={18} />
              </a>
              
              <div className="flex items-center gap-4 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Index;
