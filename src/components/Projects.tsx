import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./icons/Social";
import { Section } from "./Section";
import p1 from "@/assets/project1.png";
import p2 from "@/assets/project2.png";
import p3 from "@/assets/project3.png";
import p4 from "@/assets/project4.jpeg";

const projects = [
  {
    image: p1,
    title: "AI Content Generator",
    description:
      "AI-powered web application for automatically generating text and visual content, developed remotely during my internship at ASITECH SOLUTION, Bénin.",
    tech: ["Python", "Django", "AI"],
  },
{
  image: p2,
  title: "Pure Vanilla E-Commerce App",
  description:
    "Mobile e-commerce application developed with Flutter for selling pure Malagasy vanilla online, with product browsing, order management, and a simple customer experience.",
  tech: ["Flutter", "Dart", "E-Commerce"],
},
  {
    image: p3,
    title: "Smart Home IoT",
    description:
      "Connected home platform controlling ESP32 devices from a React dashboard with a Django backend and real-time updates.",
    tech: ["ESP32", "React", "Django"],
  },
  {
    image: p4,
    title: "Cybersecurity Laboratory",
    description:
      "Personal lab environment for practicing network reconnaissance, vulnerability scanning, and ethical hacking scenarios.",
    tech: ["Linux", "Nmap", "Metasploit"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A few projects across AI, web development, IoT, and cybersecurity."
      alt
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-soft card-soft-hover group overflow-hidden"
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
              
            
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
