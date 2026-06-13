import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { AiFillGithub } from "react-icons/ai";

// 3D Tilt Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 300, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useMotionTemplate`calc(${springY} * -15deg)`;
  const rotateY = useMotionTemplate`calc(${springX} * 15deg)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col group border border-white/10 hover:border-primary/50 transition-colors duration-500"
      >
        <div
          className="relative h-48 w-full overflow-hidden"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
          <img
            src={`${import.meta.env.BASE_URL}images/project-placeholder.png`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {project.featured && (
            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_10px_hsl(var(--accent))]">
              Featured
            </div>
          )}
        </div>

        <div
          className="p-6 flex-1 flex flex-col"
          style={{ transform: "translateZ(40px)" }}
        >
          <h4 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-primary/80 border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-auto">
            {project.liveUrl && (
              <Button
                size="sm"
                className="flex-1 cursor-pointer"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 cursor-pointer"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <AiFillGithub className="w-4 h-4 mr-2" /> Code
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const displayProjects = [
    {
      id: 1,
      title: "WhiteBoard",
      description:
        "A Drawing web application helps you visulaize your imagination.",
      tags: [
        "React",
        "Draw.io",
        "Node.js",
        "Express.js",
        "Tailwind",
        "MongoDB",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/muhannad007/WhiteBoard",
      featured: true,
    },
    {
      id: 2,
      title: "Smart Green",
      description:
        "An IOT system for sanitation workers to monitor waste containers around a city and connect them to each other, built with React as the frontend backbone and C++ for hardware programming.",
      tags: ["React", "C++", "PHP", "Framer Motion", "Mapbox", "Socket.io"],
      liveUrl: null,
      githubUrl: "https://github.com/muhannad007/smart-green",
      featured: false,
    },
    {
      id: 3,
      title: "Magic Movers",
      description:
        "API for shipping company called (magic movers), handles adding new shipping requests, new moagic mover insertions, shipping statistics, and a lot of other stuff.",
      tags: ["TypeScript", "Node.js", "Express.js", "mongo"],
      liveUrl: null,
      githubUrl: "https://github.com/muhannad007/magic-movers",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-2">
            Work // Archive
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h3>
        </div>

        {/* {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-primary">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="font-mono animate-pulse">Establishing secure connection to database...</p>
          </div>
        ) : isError && !displayProjects ? (
           <div className="flex flex-col items-center justify-center py-20 text-destructive glass-panel rounded-2xl">
            <AlertCircle className="w-10 h-10 mb-4" />
            <p className="font-mono">Error retrieving project data logs. System offline.</p>
          </div>
        ) : ( */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
        {/* )} */}
      </div>
    </section>
  );
}
