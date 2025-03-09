import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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
    { bg: "#275fd2", text: "text-white" },
    { bg: "#a955d4", text: "text-white" },
    { bg: "#db366e", text: "text-white" },
    { bg: "#e08832", text: "text-white" },
    { bg: "#3ab286", text: "text-white" },
];

const assignColors = (sortedData: any[]) => {
    let assignedColors = [];
    let colorIndex = 0;

    for (let i = 0; i < sortedData.length; i++) {
        assignedColors.push({ ...sortedData[i], color: colors[colorIndex] });

        // Move to the next color, restart if we reach the end
        colorIndex = (colorIndex + 1) % colors.length;
    }

    return assignedColors;
};

const CareerOverview: React.FC<CareerOverviewProps> = ({ progress }) => {
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const [viewingOther, setViewingOther] = useState(false);
    const [viewingLabel, setViewingLabel] = useState("");
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleIndustryClick = (industry: string, level: number | undefined) => {
        if (industry === "Other") {
            setViewingOther(!viewingOther);
            setViewingLabel(`${selectedIndustry} > Other`);
        } else {
            if (level === 1) {
                // Reset back to industries view
                setSelectedIndustry(null);
                setViewingLabel(""); // Reset viewingLabel when back at the top level
            } else {
                setSelectedIndustry(industry);
                setViewingLabel(industry);
            }
            setViewingOther(false); // Reset 'Other' view when switching industries
        }
    };

    const handleMouseMove = (event: React.MouseEvent, skillName: string) => {
        setHoveredSkill(skillName);
        setTooltipPosition({ x: event.clientX + 15, y: event.clientY + 15 });
    };

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    };

    // Process skill breakdown
    let displayData = selectedIndustry && progress[selectedIndustry as keyof typeof progress]
        ? progress[selectedIndustry as keyof typeof progress].skills
            .map((skill) => {
                const totalIndustryHours = progress[selectedIndustry as keyof typeof progress].skills.reduce(
                    (sum, s) => sum + s.hoursPerformed,
                    0
                );
                const skillPercentage = ((skill.hoursPerformed / totalIndustryHours) * 100).toFixed(2);
                return { name: skill.skill, percentage: parseFloat(skillPercentage), level: 1, color: { bg: undefined } }; // Skill level
            })
            .sort((a, b) => b.percentage - a.percentage)
        : Object.entries(progress)
            .map(([industry, data]) => ({
                name: industry,
                percentage: parseFloat(data.percentageOfTotal),
                level: 0, // Industry level
                color: { bg: undefined },
            }));

// Separate out small percentages into "Other"
    let otherTotal = 0;
    let filteredDisplayData = displayData.filter(segment => {
        if (segment.percentage < 5) {
            otherTotal += segment.percentage;
            return false; // Remove from main display
        }
        return true;
    });

    if (otherTotal > 0) {
        filteredDisplayData.push({ name: "Other", percentage: otherTotal, level: 2, color: { bg: undefined } }); // "Other" group level
    }

// Assign colors AFTER sorting and filtering
    filteredDisplayData = assignColors(filteredDisplayData);

// If "Other" is selected, break it down further
    let otherSkills = displayData
        .filter(segment => segment.percentage < 5)
        .sort((a, b) => b.percentage - a.percentage)
        .map(skill => ({
            ...skill,
            level: 1, // Skills inside "Other" remain level 1
        }));

// Adjust 'Other' segments to fill 100% width
    const totalOtherPercentage = otherSkills.reduce((sum, skill) => sum + skill.percentage, 0);
    otherSkills = otherSkills.map(skill => ({
        ...skill,
        percentage: (skill.percentage / totalOtherPercentage) * 100,
    }));

    otherSkills = assignColors(otherSkills);

    return (
        <Card className="dashboard-section">
            <CardHeader className="career-overview-header flex flex-row h-full justify-between items-center space-y-0 border-b p-0 sm:flex-row">
                <CardTitle className="section-title-no-indent">Career Overview</CardTitle>
                <div className={`ml-3 font-extralight`}>
                    {viewingLabel === "" ? '' : <span className={`text-gray-300 text-sm`}>Viewing: </span>} {viewingLabel}
                </div>

            </CardHeader>
            <CardContent className="m-0 p-0">
                {/* Progress Bar */}
                {!viewingOther ? (
                    <div style={{ position: "relative" }}>
                        <div className={``} style={{ display: "flex", height: "40px", background: "transparent", borderRadius: "20px", overflow: "visible" }}>
                            {filteredDisplayData.map((segment, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleIndustryClick(segment.name, segment.level)}
                                    onMouseMove={(event) => handleMouseMove(event, segment.name + " " + segment.percentage.toFixed(0) + "%")}
                                    onMouseLeave={handleMouseLeave}
                                    className={`progress-segment-container text-center cursor-pointer capitalize text-xs font-light flex items-center justify-center flex-col relative`}
                                    style={{
                                        width: segment.percentage + "%",
                                        padding: "5px",
                                        background: segment.color ? segment.color.bg : 'transparent',
                                        transition: "background 0.2s ease-in-out",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div>{segment.percentage.toFixed(0)}%</div>
                                    <div className={`progress-under-label`}>
                                        <div className={`w-full text-center`}>{segment.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mt-3">
                        <div style={{ display: "flex", height: "40px", background: "#eee", borderRadius: "20px", overflow: "hidden" }}>
                            {otherSkills.map((segment, index) => (
                                <div
                                    key={index}
                                    onClick={() => setViewingOther(false)}
                                    className={`text-center cursor-pointer capitalize text-xs font-light flex items-center justify-center`}
                                    style={{
                                        width: segment.percentage + "%",
                                        padding: "5px",
                                        background: segment.color.bg,
                                        transition: "background 0.2s ease-in-out",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div>
                                        {segment.percentage.toFixed(0)}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Floating Tooltip for Skill Names */}
                {/*{hoveredSkill && (*/}
                {/*    <div*/}
                {/*        className="career-overview-skill-float absolute bg-black text-white px-2 py-1 rounded shadow-lg text-xs z-20 border capitalize"*/}
                {/*        style={{*/}
                {/*            left: `${tooltipPosition.x}px`,*/}
                {/*            top: `${tooltipPosition.y}px`,*/}
                {/*            pointerEvents: "none",*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {hoveredSkill}*/}
                {/*    </div>*/}
                {/*)}*/}
            </CardContent>
        </Card>
    );
};

export default CareerOverview;
