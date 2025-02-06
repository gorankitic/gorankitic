'use client'
// hooks
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSection } from "@/context/ActiveSectionContext";
// next
import Image from "next/image";
import Link from "next/link";
// framer-motion
import { motion } from "framer-motion";
// assets
import ProfilePhoto from '@/public/gk.png';
import { ChevronRight, ChevronDown, Github } from 'lucide-react';


const Intro = () => {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSection()

    return (
        <section className="mb-20 max-w-[55rem] text-center sm:mb-28 scroll-mt-[50rem]" id="home" ref={ref}>
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
                className="mt-14 text-xl !leading-10 sm:text-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150 }}
            >
                <p><span className="font-semibold">👋🏻 Hello, World!</span> I am <span className="font-bold">Goran Kitic</span>,</p>
                <p>
                    a student at the School of Electrical Engineering, University of Belgrade, <br /> and a
                    <span className="font-semibold"> junior web developer. </span>
                </p>
                <p>
                    I enjoy building web applications using <span className="font-semibold">React </span>and <span className="font-semibold">Node.js </span><br />
                    and exploring new technologies.
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 py-8 text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
            >
                <Link onClick={() => { setActiveSection("Contact"); setTimeOfLastClick(Date.now()) }} href="#contact" className="group bg-teal-600 text-white px-5 py-3 flex items-center gap-1 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition">
                    Contact me
                    <ChevronRight className="opacity-80 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </Link>
                <a href="/GoranKiticCV.docx" download className="group bg-white px-5 py-3 flex items-center gap-1 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-200 dark:text-gray-500">
                    Download CV
                    <ChevronDown className="opacity-70 group-hover:translate-y-1 transition-all duration-300 ease-in-out" />
                </a>
                <div className="flex sm:flex-row gap-4">
                    <a href="https://github.com/gorankitic" target="_blank" className="group bg-white p-4 flex items-center gap-1 rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-200">
                        <Github className="text-teal-600 group-hover:rotate-180 transition-all duration-500 ease-in-out" />
                        Github
                    </a>
                </div>
            </motion.div>
        </section >
    )
}

export default Intro;