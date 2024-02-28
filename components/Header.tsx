'use client';

// hooks
import { useActiveSection } from "@/context/ActiveSectionContext";
// next
import Link from "next/link";
// framer-motion
import { motion } from "framer-motion";
// data
import { links } from "@/lib/data";
// clsx
import { clsx } from "clsx";

const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

    return (
        <header className="z-[999] relative pt-32">
            <motion.div
                className="header-wrapper"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
            ></motion.div>
            <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center px-8 gap-y-1 text-[0.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-gray-50 dark:text-opacity-90">
                    {links.map(link => (
                        <motion.li className="h-3/4 flex items-center justify-center relative" key={link.hash} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 200 }}  >
                            <Link
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                                className={clsx("flex w-full items-center justify-center px-3 py-3 transition", activeSection === link.name ? 'text-white' : '')}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span className="bg-teal-600 rounded-full absolute inset-0 -z-10" layoutId="activeSection" transition={{ type: "string", stiffness: 380, damping: 30 }}></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;