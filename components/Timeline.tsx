"use client"
import * as React from "react"
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts"

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

const chartConfig = {
    attendance_percentage: {
        label: <div className={`capitalize`}>attendance</div>,
        color: "hsl(var(--chart-1))",
        dataMin: 70,
    },
    wage: {
        label: <div className={`capitalize`}>wage</div>,
        color: "hsl(var(--chart-2))",
        dataMin: 20,
    },
    apr: {
        label: <div className={`capitalize`}>APR</div>,
        color: "hsl(var(--chart-3))",
        dataMin: 5,
    },
    ppi: {
        label: <div className={`capitalize`}>PPI</div>,
        color: "hsl(var(--chart-4))",
        dataMin: 5,
    },
    sp: {
        label: <div className={`capitalize`}>SP</div>,
        color: "hsl(var(--chart-5))",
        dataMin: 5,
    },
} satisfies ChartConfig

export function TimelineGraphs({employee, height}: { employee: { attendance_percentage: number; wage: number; apr: number; ppi: number; sp: number }[], height?: number, dataMin?: number }) {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig | null>("attendance_percentage")
    const total = React.useMemo(
        () => ({
            attendance_percentage: employee[employee.length - 1].attendance_percentage+"%",
            wage: "$"+employee[employee.length-1].wage.toFixed(2),
            apr: employee[employee.length - 1]?.apr.toFixed(1) || 0,
            ppi: employee[employee.length-1].ppi.toFixed(1),
            sp: employee[employee.length-1].sp.toFixed(1),
        }),
        []
    )

    return (
        <Card className={`dashboard-section border-1 border-white  rounded-lg shadow-lg`} >
            <CardHeader className="flex flex-row h-full justify-between space-y-0 border-b p-0 sm:flex-row">
                <div className="section-title-no-indent flex h-full flex-col justify-center gap-1 px-6 py-0 sm:py-6">
                    <CardTitle className={`mb-0 pb-0`}>Timeline</CardTitle>
                    {/*<CardDescription className={`text-xs text-muted-foreground mt-0 font-extralight`}>*/}
                    {/*    View attendance, wage, Average Performance Rating (APR), Predictive Performance Index (PPI), and Success Probability (SP) over time.*/}
                    {/*</CardDescription>*/}
                </div>
                <div className="recharts-has-buttons flex justify-end">
                    {["attendance_percentage", "wage", "apr", "ppi", "sp"].map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                data-key={key}
                                className={`flex flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-${activeChart === key ? chartConfig[key].color : ''} sm:border-l sm:border-t-0 sm:px-8 sm:py-6 recharts-button`}
                                onClick={() => setActiveChart(chart)}>
                                <span className="text-xs text-gray-200">
                                  {chartConfig[chart].label}
                                </span>
                                <span className="text-lg font-bold leading-none sm:text-3xl">
                                  {total[key as keyof typeof total]}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className="m-0 p-0" >
                <ChartContainer
                    config={chartConfig}
                    className={`w-full m-0 p-0 ${height ? `h-[${height}px]` : "h-[300px]"}`}
                >
                    <LineChart
                        accessibilityLayer
                        data={employee}
                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                    >
                        <CartesianGrid vertical={false} width={960} stroke={"rgba(255, 255, 255, 0.1)"} />
                        <YAxis
                            domain={[
                                (dataMin: number) => Math.floor(dataMin) - 1,  // Ensures at least 1 below the lowest value
                                (dataMax: number) => Math.ceil(dataMax) + 1   // Ensures at least 1 above the highest value
                            ]}
                            dataKey={activeChart || undefined}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `${activeChart === 'wage' ? '$' : ''}${value}`}
                        />

                        <XAxis
                            dataKey="date"
                            tickLine={true}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={14}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "numeric",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-fit rounded bg-muted/50 p-2 text-xs text-muted-foreground "
                                    nameKey={activeChart || undefined}
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "numeric",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={activeChart || undefined}
                            type="monotone"
                            stroke={`var(--color-${activeChart})`}
                            strokeWidth={1}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
