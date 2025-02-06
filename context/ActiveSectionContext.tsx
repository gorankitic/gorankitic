'use client';

// hooks
import { createContext, useState, useContext } from "react";
// types
import type { SectionName } from "@/lib/types";

type ActiveSectionProviderProps = {
    children: React.ReactNode
};

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
    // For tracking active section in header
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    // Disable the observer temporarily when user clicks on link in header
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionProvider");
    }

    return context;
}

export default ActiveSectionProvider;