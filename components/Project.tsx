'use client';

import React, { useRef } from 'react';
// next
import Image from 'next/image';
// components
import { projectsData } from '@/lib/data';
// framer-motion
import { useScroll, motion, useTransform } from 'framer-motion';

type ProjectProps = typeof projectsData[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className='mb-5 lg:mb-8 last:mb-0 md:px-14 lg:px-0'>
            <section className='group flex flex-col lg:flex-row gap-1 lg:h-[18rem] bg-gray-100 max-w-[48rem] border border-black/5 rounded-md overflow-hidden relative hover:bg-gray-200 transition'>
                <div className='py-3 px-3 text-center flex flex-col gap-2  lg:max-w-[50%] lg:py-4  lg:justify-between'>
                    <h3 className='text-xl font-semibold dark:text-gray-700'>{title}</h3>
                    <p className='mt-1 leading-relaxed text-gray-700'>{description}</p>
                    <ul className='flex flex-wrap justify-center gap-1'>
                        {tags.map((tag, index) => (
                            <li key={index} className='bg-teal-600 px-2 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full items-center'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={title} quality={95} className='shadow-2xl rounded-t-lg lg:absolute lg:top-16 lg:right-[-6rem] lg:w-[28rem] transition group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-3 group-hover:-rotate-2' />
            </section>
        </motion.div>
    )
}

// transition group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2'

export default Project;