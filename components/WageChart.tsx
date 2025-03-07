"use client"
import {attendance} from "@/app/api/employee/updated_attendance_data";
import {TrendingUp} from "lucide-react"
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart"

const chartConfig = {
    wage: {
        label: "Wage",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function WageChart(employee: any, height?: number, dataMin: number = 0) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Line Chart - Step</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        className={`w-full m-0 p-0 ${height ? `h-[${height}px]` : "h-[300px]"}`}
                        accessibilityLayer
                        // data={[{date: "", wage: 0}]}
                        data={attendance}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <YAxis
                            domain={[Math.max(dataMin, 10), "auto"]}
                            dataKey="wage"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                               tickFormatter={(value) => `$${value}`} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "numeric",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="wage"
                            type="step"
                            stroke="var(--color-wage)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
