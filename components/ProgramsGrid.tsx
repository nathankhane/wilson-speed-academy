"use client";
import React, { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";

interface Program {
    id: number;
    title: string;
    icon: React.ReactNode;
    price: string;
    priceSubtext: string;
    price2: string;
    price2Subtext: string;
    description: string;
    features: string[];
    popular: boolean;
}

interface ProgramsGridProps {
    programs: Program[];
}

const ProgramsGrid: React.FC<ProgramsGridProps> = ({ programs }) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    let displayPrograms = programs;
    if (isMobile) {
        const summer = programs.find((p) => p.title === "Summer Training Program");
        const rest = programs.filter((p) => p.title !== "Summer Training Program");
        displayPrograms = summer ? [summer, ...rest] : programs;
    }

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayPrograms.map((program, i) => (
                <ProgramCard key={program.id} program={program} index={i} />
            ))}
        </div>
    );
};

export default ProgramsGrid; 