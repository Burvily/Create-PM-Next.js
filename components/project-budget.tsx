"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function ProjectBudget() {
  const chartConfig = {
    allocated: {
      label: "Allocated Budget",
      color: "hsl(var(--chart-1))",
    },
    spent: {
      label: "Actual Spent",
      color: "hsl(var(--chart-2))",
    },
  }

  const phaseData = [
    { name: "Site Preparation", allocated: 4.5, spent: 4.2 },
    { name: "Structural Framework", allocated: 8.2, spent: 1.64 },
    { name: "Building Envelope", allocated: 5.8, spent: 0 },
    { name: "Interior Systems", allocated: 4.5, spent: 0 },
    { name: "Building Systems", allocated: 1.5, spent: 0 },
  ]

  const categoryData = [
    { name: "Materials", allocated: 12.5, spent: 3.8 },
    { name: "Labor", allocated: 8.2, spent: 1.5 },
    { name: "Equipment", allocated: 2.3, spent: 0.4 },
    { name: "Permits & Fees", allocated: 0.8, spent: 0.1 },
    { name: "Contingency", allocated: 0.7, spent: 0 },
  ]

  const totalBudget = 24500000
  const totalSpent = 5840000
  const remainingBudget = totalBudget - totalSpent
  const percentSpent = (totalSpent / totalBudget) * 100

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(totalBudget / 1000000).toFixed(1)}M</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(totalSpent / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-muted-foreground">{percentSpent.toFixed(1)}% of total budget</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(remainingBudget / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-muted-foreground">{(100 - percentSpent).toFixed(1)}% of total budget</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Budget Utilization</span>
          <span className="text-sm font-medium">{percentSpent.toFixed(1)}%</span>
        </div>
        <Progress value={percentSpent} className="h-2" />
      </div>

      <Tabs defaultValue="by-phase" className="space-y-4">
        <TabsList>
          <TabsTrigger value="by-phase">By Phase</TabsTrigger>
          <TabsTrigger value="by-category">By Category</TabsTrigger>
        </TabsList>

        <TabsContent value="by-phase" className="space-y-4">
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={phaseData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Million $", angle: -90, position: "insideLeft" }} />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="allocated" fill="var(--color-allocated)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="spent" fill="var(--color-spent)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="space-y-4">
            {phaseData.map((phase, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{phase.name}</span>
                  <span className="text-sm text-muted-foreground">
                    ${phase.spent}M / ${phase.allocated}M
                  </span>
                </div>
                <Progress value={(phase.spent / phase.allocated) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="by-category" className="space-y-4">
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Million $", angle: -90, position: "insideLeft" }} />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="allocated" fill="var(--color-allocated)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="spent" fill="var(--color-spent)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="space-y-4">
            {categoryData.map((category, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-sm text-muted-foreground">
                    ${category.spent}M / ${category.allocated}M
                  </span>
                </div>
                <Progress value={(category.spent / category.allocated) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

