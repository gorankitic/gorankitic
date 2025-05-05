'use client';

// hooks
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSection } from "@/context/ActiveSectionContext";
// components
import Image from "next/image";
import Link from "next/link";
// lib
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown, Github } from 'lucide-react';
// assets
import ProfilePhoto from '@/public/gk.png';

const Intro = () => {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSection()

    return (
        <section className="mb-20 mt-28 sm:mt-40 max-w-[55rem] text-center sm:mb-28 scroll-mt-[50rem]" id="home" ref={ref}>
            <div className="flex items-center justify-center">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: 0.5 }} >
                    <Image
                        src={ProfilePhoto}
                        alt="personal portrait"
                        quality="100"
                        priority={true}
                        className="h-52 w-52 rounded-full border-4 border-white shadow-xl"
                    />
                </motion.div>
            </div>
            <motion.div
                className="my-20 text-xl sm:text-2xl !leading-10  sm:leading-relaxed"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150 }}
            >
                <p className="mb-3"><span role="img" aria-label="waving hand">👋🏻</span> Hello, World!</p>
                <p className="text-4xl mb-5">I am <span className="font-bold">Goran Kitic</span>.</p>
                <p className="mb-5">A junior <span className="font-semibold">web developer</span>, focused on building modern web applications using <span className="font-semibold">React </span>
                    and <span className="font-semibold">Node.js, </span>
                    and exploring new technologies.
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
            >
                <Link
                    href="#contact"
                    onClick={() => { setActiveSection("Contact"); setTimeOfLastClick(Date.now()) }}
                    className="group bg-primary text-white w-44 px-3 py-2 flex items-center justify-center gap-1 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition"
                >
                    <span>Contact me</span>
                    <ChevronRight className="opacity-80 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </Link>
                <a
                    href="/GoranKiticCV.docx"
                    download
                    className="group bg-white w-44 px-3 py-2 flex items-center justify-center gap-1 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-200 dark:text-gray-700"
                >
                    <span>Download CV</span>
                    <ChevronDown className="opacity-70 group-hover:translate-y-1 transition-all duration-300 ease-in-out" />
                </a>
                <div className="flex sm:flex-row gap-4">
                    <a
                        href="https://github.com/gorankitic"
                        target="_blank"
                        className="group bg-white w-44 px-3 py-2 flex items-center justify-center gap-2 rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-200 dark:text-gray-700"
                    >
                        <Github className="text-primary group-hover:scale-110 transition-all duration-500 ease-in-out" />
                        <span>Github</span>
                    </a>
                </div>
            </motion.div>
        </section >
    )
}

export default Intro;