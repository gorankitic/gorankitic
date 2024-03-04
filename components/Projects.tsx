'use client';

import React from 'react';
// hooks
import { useSectionInView } from '@/hooks/useSectionInView';
// components
import { projectsData } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Project from './Project';

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.3);

    return (
        <section className='flex flex-col items-center scroll-mt-24 mb-20 sm:mb-28' id="projects" ref={ref}>
            <SectionHeading>My student projects</SectionHeading>
            <>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </>
        </section>
    )
}

export default Projects