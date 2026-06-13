import { motion } from "framer-motion";

export function SkillsSection() {
  const categories = [
    {
      title: "Frontend & 3D",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "Three.js / R3F", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js / Express / Nest.js", level: 85 },
        { name: "PostgreSQL / Prisma", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "Docker / CI-CD", level: 70 },
        { name: "WebSockets", level: 85 },
      ],
    },
    {
      title: "IOT & Embedded Systems",
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 95 },
        { name: "Linux", level: 75 },
        { name: "Raspberry pi", level: 90 },
        { name: "Microcontrollers", level: 100 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
            Capabilities // Metrics
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIdx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border-t border-l border-white/10"
            >
              <h4 className="text-2xl font-display font-bold mb-8 text-foreground flex items-center gap-3">
                <div className="w-2 h-2 bg-primary shadow-[0_0_10px_hsl(var(--primary))] rounded-full animate-pulse" />
                {category.title}
              </h4>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + idx * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full ${catIdx % 2 === 0 ? "bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_10px_hsl(var(--primary))]" : "bg-gradient-to-r from-accent/50 to-accent shadow-[0_0_10px_hsl(var(--accent))]"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
