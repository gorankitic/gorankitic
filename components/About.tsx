'use client'

// hooks
import { useSectionInView } from "@/hooks/useSectionInView";
// framer-motion
import { motion } from "framer-motion";
// components
import SectionHeading from "./SectionHeading";


const About = () => {
    const { ref } = useSectionInView("About", 0.9);

    return (
        <motion.section
            className="mb-20 text-center max-w-[50rem] leading-8 scroll-mt-24 sm:mb-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: 0.175 }}
            id="about"
            ref={ref}
        >
            <SectionHeading>About me</SectionHeading>
            <p>
                Four years ago, I started learning <span className="font-semibold text-lg">JavaScript</span> and I <span className="italic">fell in love with it. </span>
                Later on, I discovered the power of <span className="font-semibold text-lg">Node.js</span> and started exploring <span className="underline">backend</span> web development,
                which included technologies like <span className="italic">Express, MongoDB, Mongoose</span> and more.
            </p>
            <p>
                Learning from top-rated instructors on the Udemy platform was a great experience that helped me understand how things work under the hood.
                However, reading documentation and solving problems independently was the best way to improve my coding skills.
                Of course, there is always room for improvement. After I understood backend development I shifted my focus to <span className="underline">frontend </span>web development
                and the <span className="font-semibold text-lg">React</span> library. To learn more, I began development of student projects like social-media applications,
                e-commerce applications, and more.
            </p>
            <p>
                My core stack now includes <span className="font-semibold text-lg">MongoDb, Express, React, Node.js</span> but I am always
                looking to learn new technologies. Recently, I discovered <span className="italic">Next.js</span> and started learning more about
                <span className="italic"> Typescript</span> and <span className="italic">Prisma ORM</span>.
                JavaScript wasn't the first programming language I learned. My first programming languages were
                object-oriented programming languages <span className="italic">C++, Java and C#</span>, and then I moved on to JavaScript.
            </p>
        </motion.section >
    )
}

export default About;