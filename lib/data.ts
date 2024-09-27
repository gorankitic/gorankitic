import HarbourImg from "@/public/projects/harbour.png";
import eHouseImg from "@/public/projects/eHouse.png";
import HTMSImg from "@/public/projects/htms.png";
import MemoryGameImg from '@/public/projects/memory.png';
import ConnectImg from '@/public/projects/connect.png';

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
        githubRepo: 'harbour'
    },
    {
        title: "eHouse",
        description:
            "eHouse is an e-commerce web application where customers can sign up, buy electronic devices, and create product reviews. Paying for products is implemented with PayPal.",
        tags: ["React", "MongoDB", "Node.js", "Express", "Mongoose", "Redux"],
        imageUrl: eHouseImg,
        githubRepo: 'eHouse'
    },
    {
        title: "Hotel Tajan",
        description:
            "HTMS is an internal hotel management system application for hotel employees to track bookings, check-in and check-out guests, and managing apartments. ",
        tags: ["React", "MongoDB", "Node.js", "Express", "Mongoose"],
        imageUrl: HTMSImg,
        githubRepo: 'htms'
    },
    {
        title: "Memory Game",
        description:
            "Memory Game is a student project and a simple web application developed while learning the React library.",
        tags: ["React", "CSS", "Vite"],
        imageUrl: MemoryGameImg,
        githubRepo: 'memory-game'
    },
    {
        title: "Connect",
        description:
            "Connect is a student project and a web application for teamwork projects where team workers or group of students can discuss projects live during video calls or by sending text messages, images, or files.",
        tags: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "Mongodb", "Zod", "Socket.io", "LiveKit"],
        imageUrl: ConnectImg,
        githubRepo: 'connect'
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
