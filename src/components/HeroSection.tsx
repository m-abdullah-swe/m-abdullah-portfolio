
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onViewProjects: () => void;
}

const HeroSection = ({ onViewProjects }: HeroSectionProps) => {
  return (
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
      <button 
        onClick={onViewProjects}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        View Projects <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

export default HeroSection;
