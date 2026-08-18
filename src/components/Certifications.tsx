import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { name: "Web Development", org: "Orange Digital Center", year: "2025" },
  { name: "Arduino IoT Training", org: "Orange Digital Center", year: "2023" },
  { name: "Digital Marketing", org: "Orange Digital Center", year: "2024" },
  { name: "Machine Learning Specialization", org: "Coursera", year: "2026" },
  { name: "Django & REST API", org: "Self-paced", year: "2024" },
  { name: "Cybersecurity Fundamentals", org: "Cisco Networking Academy", year: "2025" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning" subtitle="Courses and credentials that shaped my craft.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.04 }}
            className="card-soft card-soft-hover flex items-start gap-3 p-5"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium leading-tight">{c.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.org} · {c.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
