import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Rocket, Code2, Users } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: Rocket, label: "Projects Shipped", value: 12, suffix: "+" },
  { icon: Code2, label: "Technologies", value: 5, suffix: "+" },
  { icon: Users, label: "Internships", value: 2, suffix: "" },
  { icon: Sparkles, label: "Certifications", value: 6, suffix: "+" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building intelligent, human-centered software">
      <div className="grid gap-10 md:grid-cols-5 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm <span className="text-foreground font-medium">Safidy Sylvana Nambinjanahary</span>,
            a motivated <span className="text-foreground font-medium">Computer Science graduate</span> and
            <span className="text-foreground font-medium"> Master's student in Artificial Intelligence</span>
            at the National School of Computer Science (ENI), Madagascar.
          </p>
          <p>
            I'm passionate about <span className="text-foreground font-medium">software engineering</span>,
            <span className="text-foreground font-medium"> artificial intelligence</span>,
            <span className="text-foreground font-medium"> cybersecurity</span>,
            <span className="text-foreground font-medium"> cloud computing</span>, and the
            <span className="text-foreground font-medium"> Internet of Things</span>. I love turning
            complex problems into elegant, secure, and intelligent digital products.
          </p>
          <p>
            My goal is to contribute to innovative technology companies while
            continuously learning new tools, frameworks, and paradigms — from
            deep learning to distributed systems.
          </p>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-soft p-5 text-center"
            >
              <s.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
              <div className="text-2xl font-bold gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
