"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Clock, DollarSign, FileText, FolderOpen, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function WorkBreakdownStructure() {
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    "phase-1": true,
    "phase-2": false,
    "phase-3": false,
    "phase-4": false,
    "phase-5": false,
  })

  const togglePhase = (phaseId: string) => {
    setExpandedPhases({
      ...expandedPhases,
      [phaseId]: !expandedPhases[phaseId],
    })
  }

  const phases = [
    {
      id: "phase-1",
      name: "Phase 1: Site Preparation & Foundation",
      progress: 85,
      budget: { allocated: 4500000, spent: 4200000 },
      duration: "Mar 2024 - Jun 2024",
      status: "In Progress",
      milestones: [
        {
          name: "Site Clearing & Excavation",
          progress: 100,
          budget: { allocated: 1200000, spent: 1150000 },
          duration: "Mar 2024 - Apr 2024",
          status: "Completed",
          tasks: [
            { name: "Demolition of existing structures", status: "Completed" },
            { name: "Site clearing and grading", status: "Completed" },
            { name: "Excavation for foundation", status: "Completed" },
          ],
        },
        {
          name: "Foundation Construction",
          progress: 90,
          budget: { allocated: 3300000, spent: 3050000 },
          duration: "Apr 2024 - Jun 2024",
          status: "In Progress",
          tasks: [
            { name: "Pile driving", status: "Completed" },
            { name: "Concrete pouring for foundation", status: "Completed" },
            { name: "Waterproofing", status: "In Progress" },
            { name: "Foundation inspection", status: "Not Started" },
          ],
        },
      ],
    },
    {
      id: "phase-2",
      name: "Phase 2: Structural Framework",
      progress: 20,
      budget: { allocated: 8200000, spent: 1640000 },
      duration: "Jun 2024 - Dec 2024",
      status: "In Progress",
      milestones: [
        {
          name: "Steel Structure Assembly",
          progress: 35,
          budget: { allocated: 5500000, spent: 1540000 },
          duration: "Jun 2024 - Oct 2024",
          status: "In Progress",
          tasks: [
            { name: "Steel column installation", status: "In Progress" },
            { name: "Beam installation", status: "In Progress" },
            { name: "Floor decking", status: "Not Started" },
            { name: "Structural inspection", status: "Not Started" },
          ],
        },
        {
          name: "Concrete Core Construction",
          progress: 5,
          budget: { allocated: 2700000, spent: 100000 },
          duration: "Aug 2024 - Dec 2024",
          status: "Just Started",
          tasks: [
            { name: "Elevator shaft construction", status: "Just Started" },
            { name: "Stairwell construction", status: "Not Started" },
            { name: "Mechanical shaft construction", status: "Not Started" },
          ],
        },
      ],
    },
    {
      id: "phase-3",
      name: "Phase 3: Building Envelope",
      progress: 0,
      budget: { allocated: 5800000, spent: 0 },
      duration: "Dec 2024 - Apr 2025",
      status: "Not Started",
      milestones: [
        {
          name: "Exterior Wall Installation",
          progress: 0,
          budget: { allocated: 3200000, spent: 0 },
          duration: "Dec 2024 - Mar 2025",
          status: "Not Started",
          tasks: [],
        },
        {
          name: "Roofing System",
          progress: 0,
          budget: { allocated: 1600000, spent: 0 },
          duration: "Feb 2025 - Apr 2025",
          status: "Not Started",
          tasks: [],
        },
        {
          name: "Window Installation",
          progress: 0,
          budget: { allocated: 1000000, spent: 0 },
          duration: "Jan 2025 - Apr 2025",
          status: "Not Started",
          tasks: [],
        },
      ],
    },
    {
      id: "phase-4",
      name: "Phase 4: Interior Systems & Finishes",
      progress: 0,
      budget: { allocated: 4500000, spent: 0 },
      duration: "Apr 2025 - Oct 2025",
      status: "Not Started",
      milestones: [],
    },
    {
      id: "phase-5",
      name: "Phase 5: Building Systems & Commissioning",
      progress: 0,
      budget: { allocated: 1500000, spent: 0 },
      duration: "Oct 2025 - Dec 2025",
      status: "Not Started",
      milestones: [],
    },
  ]

  return (
    <div className="space-y-4">
      {phases.map((phase) => (
        <div key={phase.id} className="border rounded-lg">
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50"
            onClick={() => togglePhase(phase.id)}
          >
            <div className="flex items-center gap-2">
              {expandedPhases[phase.id] ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
              <FolderOpen className="h-5 w-5 text-primary" />
              <span className="font-medium">{phase.name}</span>
              <Badge
                variant={
                  phase.status === "Completed"
                    ? "outline"
                    : phase.status === "In Progress"
                      ? "secondary"
                      : phase.status === "Just Started"
                        ? "default"
                        : "secondary"
                }
              >
                {phase.status}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{phase.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                <span>${(phase.budget.allocated / 1000000).toFixed(1)}M</span>
              </div>
              <div className="w-24 text-right text-sm font-medium">{phase.progress}%</div>
            </div>
          </div>

          {expandedPhases[phase.id] && (
            <div className="px-4 pb-4 pt-0">
              <div className="ml-6 mb-4">
                <Progress value={phase.progress} className="h-2" />
              </div>

              <div className="space-y-4 ml-6">
                {phase.milestones.map((milestone, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="font-medium">{milestone.name}</span>
                        <Badge
                          variant={
                            milestone.status === "Completed"
                              ? "outline"
                              : milestone.status === "In Progress"
                                ? "secondary"
                                : milestone.status === "Just Started"
                                  ? "default"
                                  : "secondary"
                          }
                        >
                          {milestone.status}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium">{milestone.progress}%</div>
                    </div>

                    <Progress value={milestone.progress} className="h-2 mb-4" />

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{milestone.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>${(milestone.budget.allocated / 1000000).toFixed(2)}M</span>
                      </div>
                    </div>

                    {milestone.tasks && milestone.tasks.length > 0 && (
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <Users className="h-4 w-4" />
                          <span>Tasks</span>
                        </div>
                        <ul className="space-y-1 ml-5 list-disc text-sm">
                          {milestone.tasks.map((task, j) => (
                            <li key={j} className="text-muted-foreground">
                              {task.name}
                              <Badge variant="outline" className="ml-2 text-xs">
                                {task.status}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

