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
      "I worked on backend development of a Manufacturing Execution System (MES) using Express.js, Docker and MySQL.",
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
    title: "YouTube Downloader",
    description:
      // "A desktop app to download YouTube videos. Users can paste a video URL and download it as MP4/MP3 in desired location.",
      "Developed a full-stack YouTube downloader deployed on AWS with secure backend services, and extended functionality to a desktop application using Electron.",
    tags: ["Django", "AWS", "Electron"],
    imageUrl: ytdImg,
  },
  {
    title: "Simple Operating System",
    description:
      "A simple operating system with features like file system, process management and memory management.",
    tags: ["C++", "x86 Assembly", "Bochs"],
    imageUrl: osImg,
  },
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
] as const;

export const skillsData = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Express.js",
  "Nest.js",
  "Django",
  "React",
  "Next.js",
  "SQL",
  "Docker",
  "AWS",
  "Git",
] as const;
