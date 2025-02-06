'use client'

// hooks
import { useSectionInView } from "@/hooks/useSectionInView";
// components
import SectionHeading from "./SectionHeading";
// data
import { skillsData } from "@/lib/data";
// framer-motion
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * index }
    })
}

const Skills = () => {
    const { ref } = useSectionInView("Skills", 1);

    return (
        <section ref={ref} id="skills" className="mb-20 max-w-[50rem] scroll-mt-28 text-center sm:mb-28">
            <SectionHeading>My tech stack</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="bg-white borderBlack rounded-xl px-5 py-3"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;