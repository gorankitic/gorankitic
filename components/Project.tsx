'use client';

import React, { use, useRef } from 'react';
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
        <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className='mb-3 sm:mb-8 last:mb-0'>
            <section className='group bg-gray-100 max-w-[48rem] border border-black/5 rounded-md overflow-hidden relative sm:h-[21rem] hover:bg-gray-200 transition'>
                <div className='py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-6 sm:max-w-[50%] flex flex-col h-full'>
                    <h3 className='text-xl font-semibold dark:text-gray-700'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto sm:mb-4'>
                        {tags.map((tag, index) => (
                            <li key={index} className='bg-teal-600 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full items-center justify-center'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={title} quality={95} className='absolute sm:top-20 sm:right-[-10rem] sm:w-[32rem] rounded-t-lg shadow-2xl transition group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2' />
            </section>
        </motion.div>
    )
}

export default Project;