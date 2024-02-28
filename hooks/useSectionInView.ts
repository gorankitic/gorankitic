
// hooks
import { useEffect } from 'react';
import { useActiveSection } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
// types
import type { SectionName } from '@/lib/types';

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
    const { ref, inView } = useInView({ threshold });
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, timeOfLastClick, sectionName]);

    return { ref }
}