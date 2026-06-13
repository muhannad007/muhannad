import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Terminal } from "lucide-react";

const LazyCanvas = lazy(() =>
  import("./Scene3D").catch(() => ({ default: () => null })),
);

function FallbackBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,50%,3%)] via-[hsl(260,50%,8%)] to-[hsl(240,50%,3%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
      <div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] rounded-full bg-primary/3 blur-[60px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            background:
              Math.random() > 0.5
                ? "hsl(190 100% 50% / 0.4)"
                : "hsl(320 100% 60% / 0.3)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

function CanvasWithFallback() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === null) return null;
  if (!hasWebGL) return <FallbackBackground />;

  return (
    <Suspense fallback={<FallbackBackground />}>
      <LazyCanvas />
    </Suspense>
  );
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <CanvasWithFallback />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-primary font-medium tracking-wider uppercase text-sm">
              Muhannad Afifa
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            Full Stack <br />
            <span className="text-gradient">Developer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            Crafting immersive digital experiences by bridging advanced
            interactive frontends with robust, scalable backends. Specializing
            in 3D web interfaces, modern full-stack architecture, and pushing
            the boundaries of browser performance and data processing.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Initiate Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
      {/* <Button
        size="lg"
        className="group"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Download Resume
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button> */}
    </section>
  );
}
