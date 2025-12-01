"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { personalInfo } from "@/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Interested in working together or have questions? Feel free to reach
            out!
          </p>
        </motion.div>

        {/* Centered contact details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mx-auto max-w-md text-center space-y-8"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-muted/30 p-3">
              <Mail className="h-5 w-5" />
            </div>
            <h4 className="font-medium">Email</h4>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {personalInfo.contact.email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-muted/30 p-3">
              <Linkedin className="h-5 w-5" />
            </div>
            <h4 className="font-medium">LinkedIn</h4>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              className="break-all text-muted-foreground transition-colors hover:text-primary"
            >
              {personalInfo.contact.linkedin}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-muted/30 p-3">
              <Github className="h-5 w-5" />
            </div>
            <h4 className="font-medium">GitHub</h4>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              className="break-all text-muted-foreground transition-colors hover:text-primary"
            >
              {personalInfo.contact.github}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
