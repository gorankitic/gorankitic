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
            "Harbour is a social media application where users can sign up, upload and delete photos, find friends, follow them, like their photos, and make comments. The user receives notifications on follow, like, or comment actions.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Mongoose", "Firebase"],
        imageUrl: HarbourImg,
    },
    {
        title: "eHouse",
        description:
            "eHouse is an e-commerce web application where customers can sign up, buy electronic devices, and create product reviews. Paying for products is implemented with PayPal.",
        tags: ["React", "MongoDB", "Node.js", "Express", "Mongoose", "Redux"],
        imageUrl: eHouseImg,
    },
    {
        title: "Playground",
        description:
            "Playground is a social media application where users can sign up, upload and delete photos, find friends, follow them, like their photos, and make comments. The user receives real-time notifications on follow, like, or comment actions.",
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
