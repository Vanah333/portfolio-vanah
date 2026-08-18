import { motion } from "framer-motion";
import {
  Code2, Layout, Server, Brain, ShieldCheck, Database, Cloud, Cpu, Wrench,
} from "lucide-react";
import { Section } from "./Section";

const groups = [
  { icon: Code2, title: "Programming Languages", items: ["Python", "Java", "PHP", "JavaScript"] },
  { icon: Layout, title: "Frontend", items: ["React", "Angular", "Vue.js", "HTML", "CSS", "Tailwind CSS"] },
  { icon: Server, title: "Backend", items: ["Django", "REST API", "GraphQL"] },
  { icon: Brain, title: "Artificial Intelligence", items: ["Machine Learning", "Deep Learning", "TensorFlow"] },
  { icon: ShieldCheck, title: "Cybersecurity", items: ["Network Security", "Pentesting", "OWASP", "Kali Linux"] },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "MySQL"] },
  { icon: Cloud, title: "Cloud Computing", items: ["AWS", "Docker", "Linux"] },
  { icon: Cpu, title: "IoT", items: ["Arduino", "ESP32"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Figma"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      subtitle="A modern toolbox spanning AI, full-stack development, security, cloud, and IoT."
      alt
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card-soft card-soft-hover p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/80"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
