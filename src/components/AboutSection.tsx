import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Layers } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      value: "5+",
      label: "Years Exp",
    },
    {
      icon: <Layers className="w-6 h-6 text-accent" />,
      value: "50+",
      label: "Projects",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-primary" />,
      value: "10+",
      label: "Clients",
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      value: "99%",
      label: "Uptime",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full" />
            <div className="glass-panel p-2 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10" />
              <img
                src={`${import.meta.env.BASE_URL}images/avatar.png`}
                alt="Cyberpunk Avatar"
                className="w-full aspect-square object-cover rounded-xl grayscale-[50%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="font-display font-bold text-2xl">
                  Muhannad <span className="text-primary">Afifa</span>
                </div>
                <div className="font-mono text-sm text-accent">
                  Lvl. 99 Full Stack Wizard
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
              Bio
            </h2>
            <h3 className="text-4xl font-display font-bold mb-6">
              Bridging the gap between{" "}
              <span className="text-gradient">design & logic</span>
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a creative developer specializing in building immersive,
              high-performance web applications. My expertise lies in Next,
              React, Three.js, and modern backend architectures. I don't just
              build websites; I engineer digital experiences that leave a
              lasting impression.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              When I'm not coding, I'm exploring the intersections of generative
              art, cyberpunk aesthetics, and the future of human-computer
              interaction in the browser.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-lg">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-display font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
