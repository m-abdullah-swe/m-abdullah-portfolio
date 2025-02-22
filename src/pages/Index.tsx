import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Smartphone, Network } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      title: "Mobile Banking App",
      description: "Secure banking application built with React Native",
      image: "/placeholder.svg",
      tech: ["React Native", "JavaScript", "API Integration"],
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution",
      image: "/placeholder.svg",
      tech: ["Java", "Spring Boot", "React"],
    },
    {
      title: "Task Management System",
      description: "Enterprise task management application",
      image: "/placeholder.svg",
      tech: ["Java", "React", "PostgreSQL"],
    },
  ];

  const skills = [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React Native", level: 88 },
    { name: "Spring Boot", level: 82 },
    { name: "Mobile Development", level: 85 },
    { name: "API Design", level: 80 },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">MA.</span>
            <div className="space-x-8">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`nav-link ${
                    activeSection === item ? "text-foreground after:scale-x-100" : ""
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
              Software Engineer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Muhammad Abdullah
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Crafting exceptional mobile and web experiences with Java, JavaScript, and React Native
            </p>
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
              View Projects <ArrowRight size={18} />
            </button>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-20 bg-secondary/50">
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
              {skills.map((skill) => (
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

        <section className="container mx-auto px-6 py-20 bg-secondary/50">
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
                  className="project-card glass"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                        >
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

        <section className="container mx-auto px-6 py-20">
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
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Me <ArrowRight size={18} />
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Index;
