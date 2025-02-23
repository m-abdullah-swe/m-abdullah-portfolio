import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Laptop, Smartphone, Network, Moon, Sun, Github, Linkedin, Twitter, X, Star, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    image: string;
    video: string;
    images: string[];
    tech: string[];
    longDescription?: string;
  }>(null);
  const { theme, setTheme } = useTheme();

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
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
    image: "/placeholder.svg",
    video: "https://example.com/demo.mp4",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tech: ["React Native", "JavaScript", "API Integration"]
  }, {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution",
    longDescription: "A scalable e-commerce platform built with modern technologies. Features include product management, shopping cart, secure checkout, order tracking, and admin dashboard for inventory management.",
    image: "/placeholder.svg",
    video: "https://example.com/demo.mp4",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tech: ["Java", "Spring Boot", "React"]
  }, {
    title: "Task Management System",
    description: "Enterprise task management application",
    longDescription: "An enterprise-grade task management system that helps teams collaborate effectively. Includes features like task assignment, progress tracking, deadline management, and detailed reporting.",
    image: "/placeholder.svg",
    video: "https://example.com/demo.mp4",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tech: ["Java", "React", "PostgreSQL"]
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

  const reviews = [{
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    role: "CTO",
    content: "Working with Abdullah was an excellent experience. His expertise in mobile development helped us launch our app ahead of schedule.",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    name: "Michael Chen",
    company: "Digital Dynamics",
    role: "Product Manager",
    content: "Abdullah's attention to detail and problem-solving skills made him an invaluable asset to our project. Would definitely work with him again!",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    name: "Emily Rodriguez",
    company: "FinTech Innovations",
    role: "Lead Developer",
    content: "The quality of work delivered was exceptional. Abdullah's understanding of both frontend and backend technologies is impressive.",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    name: "David Kim",
    company: "StartUp Masters",
    role: "CEO",
    content: "Outstanding work on our e-commerce platform. Abdullah's solutions were both innovative and scalable.",
    rating: 5,
    image: "/placeholder.svg"
  }];

  return (
    <div className="min-h-screen">
      <div className="bg-pattern" />
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">M.Abdullah.SE</span>
            
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "projects", "contact"].map(item => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link ${activeSection === item ? "text-foreground after:scale-x-100" : ""}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-full hover:bg-accent/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-border/20"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {["home", "about", "projects", "contact"].map(item => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`text-left py-2 ${activeSection === item ? "text-accent" : "text-foreground/80"}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2 py-2"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-24">
        <section ref={sectionRefs.home} className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
              Software Engineer
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
              Muhammad Abdullah
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Crafting exceptional mobile and web experiences with Java, JavaScript, and React Native
            </p>
            <button 
              onClick={() => handleNavClick("projects")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={18} />
            </button>
          </motion.div>
        </section>

        <section ref={sectionRefs.about} className="container mx-auto px-6 py-20 bg-secondary/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title">About Me</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Based in Pakistan, I specialize in developing high-performance mobile and web applications.
              With extensive experience in Java, JavaScript, and React Native, I focus on creating
              seamless user experiences that drive business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
              <div className="glass p-6 rounded-lg sm:col-span-2 md:col-span-1">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card glass cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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

        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title mb-12">Client Reviews</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="glass p-6 rounded-xl h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{review.name}</h3>
                          <p className="text-sm text-muted-foreground">{review.role}</p>
                          <p className="text-sm text-accent">{review.company}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{review.content}</p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Interested in working together? Let's discuss your project.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
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

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold mb-4">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <video
                      controls
                      className="w-full h-[400px] object-cover rounded-lg"
                      src={selectedProject.video}
                    />
                  </CarouselItem>
                  {selectedProject.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} screenshot ${index + 1}`} 
                        className="w-full h-[400px] object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <DialogDescription className="text-base text-foreground">
                <p className="mb-4">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
