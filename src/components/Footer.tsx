import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "./icons/Social";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Safidy Sylvana Nambinjanahary. Crafted with care in Madagascar.
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:safidy.nambinjanahary@example.com" className="rounded-full border border-border p-2 text-muted-foreground hover:border-primary hover:text-primary" aria-label="Email"><Mail className="h-4 w-4" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 text-muted-foreground hover:border-primary hover:text-primary" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 text-muted-foreground hover:border-primary hover:text-primary" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-all ${
          show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
