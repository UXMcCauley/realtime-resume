"use client"
import "../styles/globals.css"
import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { date: "2024-04-01", attendance: 222, wage: 150 },
    { date: "2024-04-02", attendance: 97, wage: 180 },
    { date: "2024-04-03", attendance: 167, wage: 120 },
    { date: "2024-04-04", attendance: 242, wage: 260 },
    { date: "2024-04-05", attendance: 373, wage: 290 },
    { date: "2024-04-06", attendance: 301, wage: 340 },
    { date: "2024-04-07", attendance: 245, wage: 180 },
    { date: "2024-04-08", attendance: 409, wage: 320 },
    { date: "2024-04-09", attendance: 59, wage: 110 },
    { date: "2024-04-10", attendance: 261, wage: 190 },
    { date: "2024-04-11", attendance: 327, wage: 350 },
    { date: "2024-04-12", attendance: 292, wage: 210 },
    { date: "2024-04-13", attendance: 342, wage: 380 },
    { date: "2024-04-14", attendance: 137, wage: 220 },
    { date: "2024-04-15", attendance: 120, wage: 170 },
    { date: "2024-04-16", attendance: 138, wage: 190 },
    { date: "2024-04-17", attendance: 446, wage: 360 },
    { date: "2024-04-18", attendance: 364, wage: 410 },
    { date: "2024-04-19", attendance: 243, wage: 180 },
    { date: "2024-04-20", attendance: 89, wage: 150 },
    { date: "2024-04-21", attendance: 137, wage: 200 },
    { date: "2024-04-22", attendance: 224, wage: 170 },
    { date: "2024-04-23", attendance: 138, wage: 230 },
    { date: "2024-04-24", attendance: 387, wage: 290 },
    { date: "2024-04-25", attendance: 215, wage: 250 },
    { date: "2024-04-26", attendance: 75, wage: 130 },
    { date: "2024-04-27", attendance: 383, wage: 420 },
    { date: "2024-04-28", attendance: 122, wage: 180 },
    { date: "2024-04-29", attendance: 315, wage: 240 },
    { date: "2024-04-30", attendance: 454, wage: 380 },
    { date: "2024-05-01", attendance: 165, wage: 220 },
    { date: "2024-05-02", attendance: 293, wage: 310 },
    { date: "2024-05-03", attendance: 247, wage: 190 },
    { date: "2024-05-04", attendance: 385, wage: 420 },
    { date: "2024-05-05", attendance: 481, wage: 390 },
    { date: "2024-05-06", attendance: 498, wage: 520 },
    { date: "2024-05-07", attendance: 388, wage: 300 },
    { date: "2024-05-08", attendance: 149, wage: 210 },
    { date: "2024-05-09", attendance: 227, wage: 180 },
    { date: "2024-05-10", attendance: 293, wage: 330 },
    { date: "2024-05-11", attendance: 335, wage: 270 },
    { date: "2024-05-12", attendance: 197, wage: 240 },
    { date: "2024-05-13", attendance: 197, wage: 160 },
    { date: "2024-05-14", attendance: 448, wage: 490 },
    { date: "2024-05-15", attendance: 473, wage: 380 },
    { date: "2024-05-16", attendance: 338, wage: 400 },
    { date: "2024-05-17", attendance: 499, wage: 420 },
    { date: "2024-05-18", attendance: 315, wage: 350 },
    { date: "2024-05-19", attendance: 235, wage: 180 },
    { date: "2024-05-20", attendance: 177, wage: 230 },
    { date: "2024-05-21", attendance: 82, wage: 140 },
    { date: "2024-05-22", attendance: 81, wage: 120 },
    { date: "2024-05-23", attendance: 252, wage: 290 },
    { date: "2024-05-24", attendance: 294, wage: 220 },
    { date: "2024-05-25", attendance: 201, wage: 250 },
    { date: "2024-05-26", attendance: 213, wage: 170 },
    { date: "2024-05-27", attendance: 420, wage: 460 },
    { date: "2024-05-28", attendance: 233, wage: 190 },
    { date: "2024-05-29", attendance: 78, wage: 130 },
    { date: "2024-05-30", attendance: 340, wage: 280 },
    { date: "2024-05-31", attendance: 178, wage: 230 },
    { date: "2024-06-01", attendance: 178, wage: 200 },
    { date: "2024-06-02", attendance: 470, wage: 410 },
    { date: "2024-06-03", attendance: 103, wage: 160 },
    { date: "2024-06-04", attendance: 439, wage: 380 },
    { date: "2024-06-05", attendance: 88, wage: 140 },
    { date: "2024-06-06", attendance: 294, wage: 250 },
    { date: "2024-06-07", attendance: 323, wage: 370 },
    { date: "2024-06-08", attendance: 385, wage: 320 },
    { date: "2024-06-09", attendance: 438, wage: 480 },
    { date: "2024-06-10", attendance: 155, wage: 200 },
    { date: "2024-06-11", attendance: 92, wage: 150 },
    { date: "2024-06-12", attendance: 492, wage: 420 },
    { date: "2024-06-13", attendance: 81, wage: 130 },
    { date: "2024-06-14", attendance: 426, wage: 380 },
    { date: "2024-06-15", attendance: 307, wage: 350 },
    { date: "2024-06-16", attendance: 371, wage: 310 },
    { date: "2024-06-17", attendance: 475, wage: 520 },
    { date: "2024-06-18", attendance: 107, wage: 170 },
    { date: "2024-06-19", attendance: 341, wage: 290 },
    { date: "2024-06-20", attendance: 408, wage: 450 },
    { date: "2024-06-21", attendance: 169, wage: 210 },
    { date: "2024-06-22", attendance: 317, wage: 270 },
    { date: "2024-06-23", attendance: 480, wage: 530 },
    { date: "2024-06-24", attendance: 132, wage: 180 },
    { date: "2024-06-25", attendance: 141, wage: 190 },
    { date: "2024-06-26", attendance: 434, wage: 380 },
    { date: "2024-06-27", attendance: 448, wage: 490 },
    { date: "2024-06-28", attendance: 149, wage: 200 },
    { date: "2024-06-29", attendance: 103, wage: 160 },
    { date: "2024-06-30", attendance: 446, wage: 400 },
]

const chartConfig = {
    views: {
        label: "",
    },
    attendance: {
        label: "attendance",
        color: "hsl(var(--chart-1))",
        height: 220
    },
    wage: {
        label: "wage",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function Timeline({employee, height}: { employee: any, height?: number }) {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("attendance")

    const total = React.useMemo(
        () => ({
            attendance: chartData.reduce((acc, curr) => acc + curr.attendance, 0),
            wage: chartData.reduce((acc, curr) => acc + curr.wage, 0),
        }),
        []
    )

    return (
        <Card className={`border-1 border-white  rounded-lg shadow-lg`} >
            <CardHeader className="flex flex-row h-full justify-between space-y-0 border-b p-0 sm:flex-row">
                <div className="section-title flex h-full flex-col justify-center gap-1 px-6 py-0 sm:py-6">
                    <CardTitle className={`mb-0 pb-0`}>Timeline</CardTitle>
                    <CardDescription className={`text-sm text-muted-foreground mt-0 font-extralight`}>
                        Showing total visitors for the last 3 months
                    </CardDescription>
                </div>
                <div className="recharts-has-buttons flex justify-end">
                    {["attendance", "wage"].map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="flex flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 recharts-button"
                                onClick={() => setActiveChart(chart)}
                            >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className="m-0 p-0">
                <ChartContainer
                    config={chartConfig}
                    className="w-full m-0 p-0"
                >
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                    >
                        <CartesianGrid vertical={false} width={960} stroke={"rgba(255, 255, 255, 0.1)"} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={activeChart}
                            type="monotone"
                            stroke={`var(--color-${activeChart})`}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
