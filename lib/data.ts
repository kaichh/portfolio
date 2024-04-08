import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import osImg from "@/public/simple-operating-system.png";
import splitwiseImg from "@/public/splitwise-clone.png";
import ytdImg from "@/public/youtube-downloder-electron.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "student @ Texas A&M",
  //   location: "College Station, TX",
  //   description:
  //     "I'm currently studying for my master's degree in computer science with 3.8 GPA. I took courses like software engineering, operating systems and network security.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2022-present",
  // },
  {
    title: "Software Engineer Intern",
    location: "Taichung, Taiwan",
    description:
      "I worked on backend development of a Manufacturing Execution System (MES) using Express.js, Docker and SQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Summer",
  },
  {
    title: "Analyst",
    location: "Shanghai, China",
    description:
      "I did consumer research and data analysis for a market research company.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Splitwise Clone",
    description:
      "A clone of the popular expense sharing app Splitwise. Users can add expenses, split them and see a summary.",
    tags: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Database Normalization",
    ],
    imageUrl: splitwiseImg,
  },
  {
    title: "Simple Operating System",
    description:
      "A simple operating system with features like file system, process management and memory management.",
    tags: ["C", "x86 Assembly", "Bochs"],
    imageUrl: osImg,
  },
  {
    title: "YouTube Downloader",
    description:
      "A desktop app to download YouTube videos. Users can paste a video URL and download it as MP4/MP3 in desired location.",
    tags: ["Electron", "HTML/CSS", "Node.js"],
    imageUrl: ytdImg,
  },
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "Express.js",
  "Nest.js",
  "React",
  "SQL",
  "Docker",
  "Git",
] as const;
