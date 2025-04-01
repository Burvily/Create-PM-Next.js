"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export function ProjectsOverview() {
  const chartConfig = {
    planned: {
      label: "Planned Progress",
      color: "hsl(var(--chart-1))",
    },
    actual: {
      label: "Actual Progress",
      color: "hsl(var(--chart-2))",
    },
  }

  const data = [
    { month: "Jan", planned: 10, actual: 8 },
    { month: "Feb", planned: 20, actual: 18 },
    { month: "Mar", planned: 30, actual: 28 },
    { month: "Apr", planned: 40, actual: 35 },
    { month: "May", planned: 50, actual: 45 },
    { month: "Jun", planned: 60, actual: 55 },
    { month: "Jul", planned: 70, actual: 65 },
    { month: "Aug", planned: 80, actual: 75 },
    { month: "Sep", planned: 90, actual: 85 },
    { month: "Oct", planned: 100, actual: 95 },
  ]

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="planned" fill="var(--color-planned)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="actual" fill="var(--color-actual)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

