import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ProjectMetrics() {
  const projects = [
    {
      name: "Downtown Office Tower",
      progress: 45,
      budget: { spent: 11025000, total: 24500000 },
      status: "On Track",
    },
    {
      name: "Riverside Bridge",
      progress: 32,
      budget: { spent: 5824000, total: 18200000 },
      status: "At Risk",
    },
    {
      name: "Metro Station Renovation",
      progress: 68,
      budget: { spent: 8704000, total: 12800000 },
      status: "On Track",
    },
    {
      name: "Harbor Expansion",
      progress: 22,
      budget: { spent: 7062000, total: 32100000 },
      status: "Delayed",
    },
  ]

  return (
    <div className="space-y-4">
      {projects.map((project, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">{project.name}</span>
            <Badge
              variant={
                project.status === "On Track" ? "outline" : project.status === "At Risk" ? "secondary" : "destructive"
              }
            >
              {project.status}
            </Badge>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Budget</span>
              <span>
                ${(project.budget.spent / 1000000).toFixed(1)}M / ${(project.budget.total / 1000000).toFixed(1)}M
              </span>
            </div>
            <Progress value={(project.budget.spent / project.budget.total) * 100} className="h-2" />
          </div>
        </div>
      ))}
    </div>
  )
}

