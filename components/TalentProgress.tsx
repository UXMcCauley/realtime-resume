"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import talentCardData from "../lib/talentCardData.json"; // Import full requirements

// Function to merge `progress` with `talentCardData.json`
const generateChartData = (industrySkills: any[], industryRequirements: any[]) => {
  return industrySkills.map(skill => {
    // Find the matching skill in `talentCardData.json`
    const matchedSkill = industryRequirements.find(reqSkill => reqSkill.skill === skill.skill);

    return {
      skill: skill.skill,
      progress: skill.hoursPerformed, // Actual hours worked
      required: matchedSkill ? Math.max(...matchedSkill.requirement.map((req: { amount: number }) => req.amount)) : 0, // Get highest level requirement
    };
  });
};

const chartConfig = {
  progress: {
    label: "Hours Performed",
    color: "hsl(var(--chart-1))",
  },
  required: {
    label: "Max Requirement",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

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
        <CardHeader className="flex flex-row h-full justify-between space-y-0 border-b p-0 sm:flex-row items-center">
          <div className="section-title-no-indent flex h-full flex-col w-3/5 justify-center gap-1 px-6 py-0 sm:py-6">
            <CardTitle className={`mb-0 pb-0`}>Talent Card Progress</CardTitle>
            <CardDescription className={`text-xs text-muted-foreground mt-0 font-extralight`}>
              Compare performed hours vs. required hours for each skill.
            </CardDescription>
          </div>
          <select
              name="talent-select"
              id="talent-select"
              className=""
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
              <CartesianGrid vertical={false} />
              <XAxis
                  dataKey="skill"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="progress" fill="var(--color-progress)" radius={4} />
              <Bar dataKey="required" fill="var(--color-required)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
  );
}
