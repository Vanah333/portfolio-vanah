import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, FolderKanban } from "lucide-react";

import profile from "@/assets/vanahh.png";

const roles = [
  "Computer Science Graduate",
  "Master's Student in AI",
  "Full-Stack Developer",
  "IoT & Cybersecurity Enthusiast",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") { setDel(false); setI((v) => v + 1); }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-muted-foreground">Available for internships & full-time roles</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I'm <span className="gradient-text">Safidy Sylvana</span>
          </h1>
          <p className="mt-3 h-7 text-lg font-medium text-primary md:text-xl">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-pulse bg-primary" />
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Computer Science Graduate · Master's Student in Artificial Intelligence
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Passionate about Artificial Intelligence, Full-Stack Development,
            Cybersecurity, and IoT. I enjoy designing innovative, secure, and
            intelligent digital solutions.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Antananarivo, Madagascar
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition hover:bg-muted"
            >
              <FolderKanban className="h-4 w-4" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-secondary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-glow">
            <img
              src={profile}
              alt="Portrait of Safidy Sylvana Nambinjanahary"
              width={768}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass absolute -bottom-5 left-6 rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="text-xs text-muted-foreground">Currently studying</div>
            <div className="text-sm font-semibold">Master's in AI @ ENI</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass absolute -top-4 -right-2 rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="text-xs text-muted-foreground">Focus</div>
            <div className="text-sm font-semibold">AI · Web · IoT · Security</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
