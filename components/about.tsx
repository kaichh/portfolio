"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Greetings, I'm Kai-Chih, but you can call me KC. Currently pursuing
        Master's in Computer Science at Texas A&M University. My focus lies in
        backend development, where I thrive on making things simple and fast.
        Yet, I'm equally drawn to full-stack development, finding joy in
        crafting solutions to real-world challenges.
      </p>
      <p>
        Beyond coding, you'll find me exploring city streets, vibing to quality
        tunes, and striving to become a Pokemon Master.
      </p>
    </motion.section>
  );
}
