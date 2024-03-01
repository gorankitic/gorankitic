import HarbourImg from "@/public/projects/harbour.png";
import eHouseImg from "@/public/projects/eHouse.png";
import PlaygroundImg from "@/public/projects/playground.png";
import MemoryGameImg from '@/public/projects/memory.png';
// import { Briefcase } from 'lucide-react';

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
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const projectsData = [
    {
        title: "Harbour",
        description:
            "Harbour is a student project and a full-stack social media application created in the process of learning React, Node.js, Express, MongoDB, React Router, React Query and Firebase.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Mongoose", "Firebase"],
        imageUrl: HarbourImg,
    },
    {
        title: "eHouse",
        description:
            "eHouse is a student project and a full-stack e-commerce web application developed in the process of learning React, Node.js, MongoDB, Express, React Router.",
        tags: ["React", "MongoDB", "Node.js", "Express", "Mongoose", "Redux"],
        imageUrl: eHouseImg,
    },
    {
        title: "Playground",
        description:
            "Playground is a student project and a full-stack social media application created in the process of learning ReactJS and Firebase.",
        tags: ["React", "Firebase", "React Router", "Framer"],
        imageUrl: PlaygroundImg,
    },
    {
        title: "Memory Game",
        description:
            "Memory Game is a student project and a simple web application developed while learning the React library.",
        tags: ["React", "CSS", "Vite"],
        imageUrl: MemoryGameImg,
    },
] as const;

export const skillsData = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Mongoose",
    "Git",
    "React Router",
    "Tanstack/React Query",
    // "TypeScript",
    // "Next.js",
    // "TailwindCSS",
] as const;
