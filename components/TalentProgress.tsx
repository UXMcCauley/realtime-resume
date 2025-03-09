"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import {Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer, ChartLegend, ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import talentCardData from "../lib/talentCardData.json";
import {TooltipContentProps} from "@radix-ui/react-tooltip"; // Import full requirements

// Function to merge `progress` with `talentCardData.json`
const generateChartData = (industrySkills: any[], industryRequirements: any[]) => {
  return industrySkills.map(skill => {
    // Find the matching skill in `talentCardData.json`
    const matchedSkill = industryRequirements.find(reqSkill => reqSkill.skill === skill.skill);

    if (!matchedSkill || !matchedSkill.requirement) {
      return { skill: skill.skill, progress: skill.hoursPerformed, required: 0, level: 0 };
    }

    // Extract level requirements
    const level1 = matchedSkill.requirement.find((req: { lv: number }) => req.lv === 1)?.amount || 0;
    const level2 = matchedSkill.requirement.find((req: { lv: number }) => req.lv === 2)?.amount || 0;
    const level3 = matchedSkill.requirement.find((req: { lv: number }) => req.lv === 3)?.amount || 0;

    // Determine the correct requirement level
    let required;
    let adjustedHours;
    let level: number;
    if (skill.hoursPerformed < level1) {
      required = level1;
      adjustedHours = skill.hoursPerformed;
      level = 1;
    } else if (skill.hoursPerformed < (level1 + level2)) {
      required = level2;
      adjustedHours = skill.hoursPerformed - level1;
      level = 2;
    } else {
      required = level3;
      adjustedHours = skill.hoursPerformed - (level1 + level2);
      level = 3;
    }

    return {
      skill: skill.skill,
      hoursPerformed: skill.hoursPerformed,
      progress: adjustedHours, // Actual hours worked
      required: required, // Correct requirement level based on `hoursPerformed`
      level: level
    };
  });
};

const chartConfig = {
  progress: {
    label: "Worked: ",
    color: "hsl(var(--chart-1))",
  },
  required: {
    label: "Next Level: ",
    color: "hsl(var(--chart-2))",
  }
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
        <div className="tooltip-styles">
          <p className={`tooltip-title`}>{`Level: ${payload[0].payload.level}`}</p>
          <p>{`${label}`}</p>
          <p><span className="progress-blue">{payload[0].payload.progress}</span> / <span className="required-pink">{payload[0].payload.required}</span></p>
          <p>{`Total hrs: ${payload[0].payload.hoursPerformed}`}</p>
        </div>
    );
  }
  return null;
};


export function TalentProgress({ progress }: {
  progress: {
    carpenter: { percentageOfTotal: string; skills: Array<any> };
    roofing: { percentageOfTotal: string; skills: Array<any> };
    concrete: { percentageOfTotal: string; skills: Array<any> }
  }
}) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("carpenter");

  useEffect(() => {
    if (progress && progress[selectedIndustry as keyof typeof progress]) {
      const industryData = progress[selectedIndustry as 'carpenter' | 'roofing' | 'concrete'];
      const industryRequirements = talentCardData[selectedIndustry as keyof typeof talentCardData]; // Get matching requirements

      if (industryData && industryData.skills && industryData.skills.length > 0) {
        setChartData(generateChartData(industryData.skills, industryRequirements));
      } else {
        setChartData([]); // Prevent undefined errors by setting an empty array
      }
    }
  }, [selectedIndustry, progress]);

  return (
      <Card className={`dashboard-section border-1 border-white rounded-lg shadow-lg`}>
        <CardHeader className="flex flex-row h-full justify-between space-y-0 border-b p-0 sm:flex-row items-start">
          <div className="section-title-no-indent flex h-full flex-col w-3/5 justify-center gap-1 px-6 py-0 sm:py-6">
            <CardTitle className={`mb-0 pb-0`}>Talent Card Progress</CardTitle>
            {/*<CardDescription className={`text-xs text-muted-foreground mt-0 font-extralight`}>*/}
            {/*  Compare performed hours vs. required hours for each skill level.*/}
            {/*</CardDescription>*/}
          </div>
          <div>
            <div className={`p-2`}>
              <>Hours Worked <span className="legend-dot-blue"/></>
              Hours Required <span className="legend-dot-pink"/>
            </div>
          </div>
          <select
              name="talent-select"
              id="talent-select"
              className="talent-select-styles"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option value="carpenter">Carpenter</option>
            <option value="roofing">Roofing</option>
            <option value="concrete">Concrete</option>
          </select>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <Tooltip  content={<CustomTooltip />}  />
              {/*<Legend/>*/}
              <CartesianGrid vertical={false} />
              <XAxis dataKey="skill" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => `${value.slice(0,5)}`} />
              <YAxis tickLine={false} axisLine={false} type="number" domain={[0, "auto"]} tickMargin={10} />

              <Bar dataKey="progress" fill="var(--color-progress)" radius={4}  />
              <Bar dataKey="required" fill="var(--color-required)" radius={4}  />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
  );
}
