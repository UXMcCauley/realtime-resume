import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
interface Skill {
    skill: string;
    hoursPerformed: number;
}

interface IndustryProgress {
    percentageOfTotal: string;
    skills: Skill[];
}

interface CareerOverviewProps {
    progress: {
        carpenter: IndustryProgress;
        roofing: IndustryProgress;
        concrete: IndustryProgress;
    };
}

const colors = [
    { bg: "bg-blue-500", text: "text-white" },
    { bg: "bg-green-500", text: "text-white" },
    { bg: "bg-yellow-500", text: "text-gray-900" },
    { bg: "bg-purple-500", text: "text-white" },
    { bg: "bg-pink-500", text: "text-white" },
];

const CareerOverview: React.FC<CareerOverviewProps> = ({ progress }) => {
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

    const handleIndustryClick = (industry: string) => {
        setSelectedIndustry(selectedIndustry === industry ? null : industry);
    };

    return (
        <Card className={`dashboard-section border-1 border-white  rounded-lg shadow-lg`} >
            <CardHeader className="flex flex-row h-full justify-between space-y-0 border-b p-0 sm:flex-row">
                <div className="section-title-no-indent flex h-full flex-col justify-center gap-1 px-6 py-0 sm:py-6">
                    <CardTitle className={`mb-0 pb-0`}>Career Overview</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="m-0 p-0" >
                {/* Progress Bar */}
                <div style={{ display: "flex", height: "30px", background: "#ddd", borderRadius: "20px", overflow: "hidden" }}>
                    {Object.entries(progress).map(([industry, data], index) => {
                        const color = colors[index % colors.length]; // Loop through colors

                        return (
                            <div
                                key={industry}
                                onClick={() => handleIndustryClick(industry)}
                                className={`${color.bg} ${color.text} text-center cursor-pointer`}
                                style={{
                                    width: parseFloat(data.percentageOfTotal) + "%",
                                    padding: "5px",
                                }}
                            >
                                {industry} ({data.percentageOfTotal})
                            </div>
                        );
                    })}
                </div>

                {/* Skill Breakdown */}
                {selectedIndustry && (
                    <div className="mt-5 p-3 border border-gray-300 rounded">
                        <h3>{selectedIndustry} Skills</h3>
                        <ul>
                            {progress[selectedIndustry as keyof typeof progress].skills.map((skill, index) => {
                                const skillPercentage = (
                                    (skill.hoursPerformed /
                                        progress[selectedIndustry as keyof typeof progress].skills.reduce((sum, s) => sum + s.hoursPerformed, 0)) *
                                    100
                                ).toFixed(2);

                                const color = colors[index % colors.length]; // Loop through colors

                                return (
                                    <li key={skill.skill} className={`p-2 ${color.bg} ${color.text} rounded mb-1`}>
                                        {skill.skill}: {skillPercentage}%
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>


    );
};

export default CareerOverview;
