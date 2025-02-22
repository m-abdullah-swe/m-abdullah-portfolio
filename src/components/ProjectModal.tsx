
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    tech: string[];
    media: {
      type: "video" | "image";
      url: string;
    }[];
  } | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={Boolean(project)} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-4">{project.title}</DialogTitle>
        </DialogHeader>
        
        <Carousel className="w-full">
          <CarouselContent>
            {project.media.map((item, index) => (
              <CarouselItem key={index}>
                {item.type === "video" ? (
                  <video 
                    src={item.url} 
                    controls 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt={`${project.title} - ${index + 1}`} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <DialogDescription className="text-base text-foreground">
          <p className="mb-4">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map(tech => (
              <span key={tech} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
