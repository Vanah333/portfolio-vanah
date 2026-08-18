import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (sending) return;

    setError(null);

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    // =========================
    // VALIDATION
    // =========================

    if (!name || name.length > 100) {
      setError("Please enter a valid name (max 100 characters).");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 255
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!message || message.length > 1000) {
      setError("Message is required (max 1000 characters).");
      return;
    }

    setSending(true);

    try {
      // =========================
      // EMAILJS CONFIGURATION
      // =========================

      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID;

      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("EmailJS configuration:", {
        serviceId,
        templateId,
        publicKey: publicKey ? "FOUND" : "MISSING",
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS environment variables are missing."
        );
      }

      // =========================
      // DATA SENT TO EMAILJS
      // =========================

      const templateParams = {
        name,
        email,
        message,
      };

      console.log(
        "Sending message:",
        templateParams
      );

      // =========================
      // SEND EMAIL
      // =========================

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        }
      );

      console.log(
        "EmailJS success:",
        response
      );

      // =========================
      // SUCCESS
      // =========================

      setSent(true);

      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: any) {
      console.error(
        "========== EMAILJS ERROR =========="
      );

      console.error(
        "Status:",
        err?.status
      );

      console.error(
        "Text:",
        err?.text
      );

      console.error(
        "Full error:",
        err
      );

      console.error(
        "==================================="
      );

      setError(
        err?.text ||
          "Unable to send your message. Please check your EmailJS configuration and try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have a project, an internship, or just want to say hi? My inbox is open."
    >
      <div className="grid gap-8 md:grid-cols-5">

        {/* =========================================
            CONTACT INFORMATION
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="md:col-span-2 space-y-3"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value:
                "safidysylvana333@gmail.com",
              href:
                "mailto:safidysylvana333@gmail.com",
            },

            {
              icon: Phone,
              label: "Phone",
              value:
                "+261 38 95 293 85",
              href:
                "tel:+261389529385",
            },

            {
              icon: MapPin,
              label: "Location",
              value:
                "Fianarantsoa, Madagascar",
            },

            {
              icon: Linkedin,
              label: "LinkedIn",
              value:
                "safisy sylvana Nambinijanahary",
              href:
                "https://www.linkedin.com/in/safidy",
            },

         
          ].map((contact) => {
            const Component: any =
              contact.href ? "a" : "div";

            return (
              <Component
                key={contact.label}
                {...(contact.href
                  ? {
                      href: contact.href,
                      target:
                        contact.href.startsWith(
                          "http"
                        )
                          ? "_blank"
                          : undefined,
                      rel: "noreferrer",
                    }
                  : {})}
                className="card-soft card-soft-hover flex items-center gap-3 p-4"
              >
                {/* ICON */}

                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <contact.icon className="h-4 w-4" />
                </div>

                {/* TEXT */}

                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">
                    {contact.label}
                  </div>

                  <div className="text-sm font-medium break-all">
                    {contact.value}
                  </div>
                </div>
              </Component>
            );
          })}
        </motion.div>

        {/* =========================================
            CONTACT FORM
        ========================================= */}

        <motion.form
          onSubmit={submit}
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="card-soft md:col-span-3 p-6 md:p-8"
        >
          {sent ? (

            /* =====================================
               SUCCESS MESSAGE
            ===================================== */

            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">

              <CheckCircle2
                className="h-12 w-12 text-primary"
              />

              <h3 className="text-lg font-semibold">
                Message sent successfully!
              </h3>

              <p className="max-w-md text-sm text-muted-foreground">
                Thank you for contacting me.
                I will get back to you as soon
                as possible.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setError(null);
                }}
                className="mt-3 rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:bg-muted"
              >
                Send another message
              </button>
            </div>

          ) : (

            /* =====================================
               FORM
            ===================================== */

            <div className="space-y-5">

              {/* NAME + EMAIL */}

              <div className="grid gap-4 sm:grid-cols-2">

                {/* NAME */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={values.name}
                    disabled={sending}
                    onChange={(e) =>
                      setValues((previous) => ({
                        ...previous,
                        name: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={255}
                    value={values.email}
                    disabled={sending}
                    onChange={(e) =>
                      setValues((previous) => ({
                        ...previous,
                        email: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  required
                  maxLength={1000}
                  rows={6}
                  value={values.message}
                  disabled={sending}
                  onChange={(e) =>
                    setValues((previous) => ({
                      ...previous,
                      message: e.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                  placeholder="Tell me about your project..."
                />

                <div className="mt-1 text-right text-xs text-muted-foreground">
                  {values.message.length}/1000
                </div>
              </div>

              {/* ERROR */}

              {error && (
                <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3">
                  <p className="text-sm text-destructive">
                    {error}
                  </p>
                </div>
              )}

              {/* SEND BUTTON */}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}