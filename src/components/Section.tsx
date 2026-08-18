import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  alt = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${alt ? "bg-surface" : "bg-background"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <span className="mb-3 inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
