'use client';

// hooks
import React, { useRef } from 'react';
// next
import Image from 'next/image';
// components
import { projectsData } from '@/lib/data';
// framer-motion
import { useScroll, motion, useTransform } from 'framer-motion';
// assets
import { Github } from 'lucide-react';

type ProjectProps = typeof projectsData[number];

const Project = ({ title, description, tags, imageUrl, githubRepo }: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className='mb-5 lg:mb-8 last:mb-0 md:px-14 lg:px-0'>
            <section className='group flex flex-col lg:flex-row gap-1 lg:h-[20rem] bg-gray-100 dark:bg-gray-700 hover:dark:bg-gray-800 max-w-[50rem] border border-black/5 rounded-md overflow-hidden relative hover:bg-gray-200 transition'>
                <div className='py-3 px-3 text-center flex flex-col gap-2 lg:max-w-[50%] lg:py-4 lg:justify-between'>
                    <div className="flex justify-center items-center gap-2">
                        <a
                            href={`https://github.com/gorankitic/${githubRepo}`}
                            target="_blank"
                            className="bg-white p-2 text-primary flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-200">
                            <Github />
                        </a>
                        <h3 className='text-xl font-semibold dark:text-gray-200'>{title}</h3>
                    </div>
                    <p className='mt-1 leading-relaxed text-gray-900 dark:text-gray-200'>{description}</p>
                    <ul className='flex flex-wrap justify-center gap-1'>
                        {tags.map((tag, index) => (
                            <li key={index} className='bg-primary px-2 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full items-center'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={title} quality={95} className='shadow-2xl rounded-t-lg lg:absolute lg:top-20 lg:right-[-5.5rem] lg:w-[30rem] transition group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-3 group-hover:-rotate-2' />
            </section>
        </motion.div>
    )
}

export default Project;