import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Laptop, Smartphone, Network, Moon, Sun, Github, Linkedin, Twitter, X, Star, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const AnimatedSectionTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <h2 
      ref={ref}
      className={`section-title ${isInView ? "after:scale-x-100" : "after:scale-x-0"}`}
      style={{
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      {children}
    </h2>
  );
};

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
    const element = sectionRefs[section as keyof typeof sectionRefs].current;
    if (element) {
      const yOffset = -80; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
    title: "Let's Build",
    description: "Construction Project Management application built with React Native",
    longDescription: "A comprehensive mobile banking solution that provides secure transactions, real-time account updates, and seamless user experience. Features include biometric authentication, instant transfers, bill payments, and detailed transaction history.",
    image: "/placeholder.svg",
    video: "https://example.com/demo.mp4",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tech: ["React Native", "JavaScript", "API Integration", "Firebase", "Push Notifications"]
  }, {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern features and seamless shopping experience",
    longDescription: "A scalable e-commerce platform built with modern technologies. Features include product management, shopping cart, secure checkout, order tracking, and admin dashboard for inventory management.",
    image: "/placeholder.svg",
    video: "https://example.com/demo.mp4",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tech: ["Java", "Spring Boot", "React Native",]
  }, {
    title: "ED Tech",
    description: "Online course learning app build with React Native",
    longDescription: "An enterprise-grade task management system that helps teams collaborate effectively. Includes features like task assignment, progress tracking, deadline management, and detailed reporting.",
    image: "/placeholder.svg",
    video: "https://example.com/demo.mp4",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tech: ["Java", "React Native", "Mongo DB",]
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
    name: "Python",
    level: 80
  }, {
    name: "Machine Learning",
    level: 80
  }, {
    name: "Simulation & Modeling",
    level: 80
  }, {
    name: "DevOps",
    level: 70
  }, {
    name: "Kubernetes",
    level: 70
  }, {
    name: "Agentic AI",
    level: 80,
  }];

  const reviews = [{
    name: "Muhammad Sameer",
    company: "Fiver",
    role: "Buyer",
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
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold bg-gradient-to-r from-accent to-accent/70 text-transparent bg-clip-text"
            >
              M.Abdullah.SE
            </motion.span>
            
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "projects", "contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link ${activeSection === item ? "text-foreground after:scale-x-100" : ""}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden p-2 rounded-full hover:bg-accent/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden glass border-t border-border/20"
            >
              <motion.div 
                className="container mx-auto px-6 py-4 flex flex-col gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {["home", "about", "projects", "contact"].map(item => (
                  <motion.button
                    key={item}
                    variants={itemVariants}
                    onClick={() => handleNavClick(item)}
                    className={`text-left py-2 ${activeSection === item ? "text-accent" : "text-foreground/80"}`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                ))}
                <motion.button
                  variants={itemVariants}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2 py-2"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
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
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-24">
        <section ref={sectionRefs.home} id="home" className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4 hover-scale"
            >
              Software Engineer
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              Muhammad Abdullah
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-base md:text-lg text-muted-foreground mb-8"
            >
              Crafting exceptional mobile and web experiences with Java, JavaScript, and React Native
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              onClick={() => handleNavClick("projects")}
              className="button-hover inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          </motion.div>
        </section>

        <section ref={sectionRefs.about} id="about" className="container mx-auto px-6 py-20 bg-secondary/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <AnimatedSectionTitle>About Me</AnimatedSectionTitle>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-8"
            >
              Based in Pakistan, I specialize in developing high-performance mobile and web applications.
              With extensive experience in Java, JavaScript, and React Native, I focus on creating
              seamless user experiences that drive business growth.
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                variants={itemVariants}
                className="glass p-6 rounded-lg hover-lift hover-glow"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Laptop className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Web Development</h3>
                <p className="text-sm text-muted-foreground">
                  Building responsive and scalable web applications
                </p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="glass p-6 rounded-lg hover-lift hover-glow"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Smartphone className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Mobile Development</h3>
                <p className="text-sm text-muted-foreground">
                  Creating native mobile experiences
                </p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="glass p-6 rounded-lg sm:col-span-2 md:col-span-1 hover-lift hover-glow"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Network className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">API Design</h3>
                <p className="text-sm text-muted-foreground">
                  Developing robust and secure APIs
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <AnimatedSectionTitle>Skills</AnimatedSectionTitle>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="relative"
                  variants={itemVariants}
                  custom={index}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="skill-item">
                    {skill.name}
                    <span className="ml-2 text-xs opacity-60">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section ref={sectionRefs.projects} id="projects" className="container mx-auto px-6 py-20 bg-secondary/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <AnimatedSectionTitle>Featured Projects</AnimatedSectionTitle>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="project-card glass cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map(tech => (
                        <motion.span 
                          key={tech} 
                          className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 215, 0, 0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <AnimatedSectionTitle>Client Reviews</AnimatedSectionTitle>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mt-12"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div 
                      className="glass p-6 rounded-xl h-full hover-lift"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        borderColor: "rgba(255, 215, 0, 0.3)"
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <motion.img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30"
                          whileHover={{ scale: 1.1 }}
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
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <Star className="w-4 h-4 fill-accent text-accent" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="hover:bg-accent hover:text-white transition-colors duration-300" />
                <CarouselNext className="hover:bg-accent hover:text-white transition-colors duration-300" />
              </div>
            </Carousel>
          </motion.div>
        </section>

        <section ref={sectionRefs.contact} id="contact" className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <AnimatedSectionTitle>Get in Touch</AnimatedSectionTitle>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-8"
            >
              Interested in working together? Let's discuss your project.
            </motion.p>
            <div className="flex flex-col items-center gap-6">
              <motion.a 
                href="mailto:your.email@example.com" 
                className="button-hover inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span>Contact Me</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              
              <motion.div 
                className="flex items-center gap-4 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.a 
                  href="https://github.com/m-abdullah-swe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full hover:bg-accent/10 transition-colors social-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full hover:bg-accent/10 transition-colors social-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full hover:bg-accent/10 transition-colors social-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-md border border-accent/20">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold mb-4">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <motion.video
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      controls
                      className="w-full h-[400px] object-cover rounded-lg"
                      src={selectedProject.video}
                    />
                  </CarouselItem>
                  {selectedProject.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <motion.img 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        src={image} 
                        alt={`${selectedProject.title} screenshot ${index + 1}`} 
                        className="w-full h-[400px] object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hover:bg-accent hover:text-white transition-colors duration-300" />
                <CarouselNext className="hover:bg-accent hover:text-white transition-colors duration-300" />
              </Carousel>

              <DialogDescription className="text-base text-foreground">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-4"
                >
                  {selectedProject.longDescription}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {selectedProject.tech.map((tech, index) => (
                    <motion.span 
                      key={tech} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.3 }}
                      className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full hover:bg-accent/30 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
