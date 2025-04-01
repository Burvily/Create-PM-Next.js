"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Clock } from "lucide-react"

export function ProjectTimeline() {
  const [currentView, setCurrentView] = useState("months")

  const milestones = [
    {
      phase: "Site Preparation & Foundation",
      events: [
        { name: "Site Clearing", date: "Mar 15, 2024", status: "Completed" },
        { name: "Excavation", date: "Apr 5, 2024", status: "Completed" },
        { name: "Foundation Concrete", date: "May 20, 2024", status: "In Progress" },
        { name: "Foundation Completion", date: "Jun 30, 2024", status: "Upcoming" },
      ],
    },
    {
      phase: "Structural Framework",
      events: [
        { name: "Steel Delivery", date: "Jun 15, 2024", status: "Upcoming" },
        { name: "Column Installation", date: "Jul 10, 2024", status: "Upcoming" },
        { name: "Beam Installation", date: "Aug 25, 2024", status: "Upcoming" },
        { name: "Floor Decking", date: "Oct 15, 2024", status: "Upcoming" },
        { name: "Concrete Core Completion", date: "Dec 20, 2024", status: "Upcoming" },
      ],
    },
    {
      phase: "Building Envelope",
      events: [
        { name: "Exterior Wall Start", date: "Dec 30, 2024", status: "Upcoming" },
        { name: "Window Installation", date: "Feb 15, 2025", status: "Upcoming" },
        { name: "Roofing System", date: "Mar 10, 2025", status: "Upcoming" },
        { name: "Building Envelope Completion", date: "Apr 30, 2025", status: "Upcoming" },
      ],
    },
  ]

  const months = [
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
    "Aug 2024",
    "Sep 2024",
    "Oct 2024",
    "Nov 2024",
    "Dec 2024",
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
    "May 2025",
    "Jun 2025",
    "Jul 2025",
    "Aug 2025",
    "Sep 2025",
    "Oct 2025",
    "Nov 2025",
    "Dec 2025",
  ]

  const quarters = ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"]

  const timeUnits = currentView === "months" ? months : quarters

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentView("months")}
            className={currentView === "months" ? "bg-primary/10" : ""}
          >
            Monthly View
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentView("quarters")}
            className={currentView === "quarters" ? "bg-primary/10" : ""}
          >
            Quarterly View
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <div className="grid grid-cols-[200px_1fr] border rounded-lg">
          <div className="border-r bg-muted/50 p-3 font-medium">Timeline</div>
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${timeUnits.length}, minmax(120px, 1fr))`,
            }}
          >
            {timeUnits.map((unit, i) => (
              <div key={i} className="border-r last:border-r-0 p-3 text-center font-medium text-sm">
                {unit}
              </div>
            ))}
          </div>

          {milestones.map((phase, i) => (
            <React.Fragment key={i}>
              <div className="border-t border-r bg-muted/30 p-3 font-medium">{phase.phase}</div>
              <div
                className="border-t grid"
                style={{
                  gridTemplateColumns: `repeat(${timeUnits.length}, minmax(120px, 1fr))`,
                }}
              >
                {timeUnits.map((unit, j) => {
                  const events = phase.events.filter((event) => {
                    const eventDate = new Date(event.date)
                    const eventMonth = `${eventDate.toLocaleString("default", { month: "short" })} ${eventDate.getFullYear()}`
                    const eventQuarter = `Q${Math.floor(eventDate.getMonth() / 3) + 1} ${eventDate.getFullYear()}`
                    return currentView === "months" ? eventMonth === unit : eventQuarter === unit
                  })

                  return (
                    <div key={j} className="border-r last:border-r-0 p-2 min-h-[80px] relative">
                      {events.length > 0 && (
                        <div className="space-y-2">
                          {events.map((event, k) => (
                            <Card key={k} className="p-0 overflow-hidden">
                              <CardContent className="p-2 text-xs">
                                <div className="flex items-center gap-1 font-medium">
                                  {event.status === "Completed" ? (
                                    <CheckCircle className="h-3 w-3 text-green-500" />
                                  ) : event.status === "In Progress" ? (
                                    <Clock className="h-3 w-3 text-yellow-500" />
                                  ) : (
                                    <AlertCircle className="h-3 w-3 text-muted-foreground" />
                                  )}
                                  {event.name}
                                </div>
                                <div className="text-muted-foreground mt-1">{event.date}</div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4 text-yellow-500" />
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-1">
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
          <span>Upcoming</span>
        </div>
      </div>
    </div>
  )
}

