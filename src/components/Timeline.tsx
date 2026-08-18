import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";
import { Section } from "./Section";

type Item = { icon: any; date: string; title: string; place: string; desc: string };

const education: Item[] = [
  {
    icon: GraduationCap,
    date: "2026 — Present",
    title: "Master's Degree in Artificial Intelligence",
    place: "National School of Computer Science (ENI)",
    desc: "Advanced coursework in machine learning, deep learning, NLP, and applied AI research.",
  },
  {
    icon: GraduationCap,
    date: "2023 — 2025",
    title: "Bachelor's Degree in Computer Science",
    place: "National School of Computer Science (ENI)",
    desc: "Computer science, software development, databases, networks, cybersecurity, artificial intelligence, and connected objects.",
  },
  {
    icon: BookOpen,
    date: "2022",
    title: "High School Diploma (Baccalauréat, Series D)",
    place: "Madagascar",
    desc: "Scientific track with a focus on mathematics and physics.",
  },
];

const experience: Item[] = [
  {
    icon: Briefcase,
    date: "2025",
    title: "Software Engineering Intern",
    place: "ASITECH SOLUTION",
    desc: "Developed an AI-powered web application for automatic text and image content generation using Python and Django.",
  },
  {
    icon: Briefcase,
    date: "2024",
    title: "Web Development Intern",
    place: "Ministry of Digital Development",
    desc: "Built a Django-based web application for internal inventory management, including role-based access and reporting.",
  },
  {
    icon: Award,
    date: "2025 ",
    title: "Trainings @ Orange Digital Center",
    place: "Tuléar, Madagascar",
    desc: "Completed programs in Web Development, Arduino IoT, and Digital Marketing.",
  },
];

function TimelineList({ items }: { items: Item[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2" />
      <ul className="space-y-8">
        {items.map((it, i) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
          >
            <span className="absolute left-4 top-4 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />
            <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
              <div className="card-soft card-soft-hover inline-block w-full p-5 text-left">
                <div className="mb-1 flex items-center gap-2 text-xs font-medium text-primary">
                  <it.icon className="h-4 w-4" />
                  <span>{it.date}</span>
                </div>
                <h3 className="font-semibold">{it.title}</h3>
                <div className="text-sm text-muted-foreground">{it.place}</div>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Learning journey">
      <TimelineList items={education} />
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked & trained" alt>
      <TimelineList items={experience} />
    </Section>
  );
}
