import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Download,
  FileText,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  MoreHorizontal,
  Settings,
  Users,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ProjectBudget } from "@/components/project-budget"
import { ProjectTimeline } from "@/components/project-timeline"
import { WorkBreakdownStructure } from "@/components/work-breakdown-structure"

export default function ProjectDetails() {
  const project = {
    id: 1,
    title: "Downtown Office Tower",
    description:
      "Construction of a 30-story office building in the city center with modern amenities, sustainable design features, and smart building technology integration.",
    progress: 45,
    status: "In Progress",
    budget: {
      total: 24500000,
      spent: 11025000,
      remaining: 13475000,
    },
    tasks: { completed: 86, total: 210 },
    startDate: "Mar 10, 2024",
    dueDate: "Dec 15, 2025",
    risk: "Medium",
    manager: "John Doe",
    team: ["Sarah Johnson", "Michael Chen", "Priya Patel", "David Rodriguez"],
    client: "Skyline Developments Inc.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="border-r bg-muted/40 md:w-64 md:flex-col md:fixed md:inset-y-0 hidden md:flex">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <FolderKanban className="h-6 w-6 text-primary" />
              <span>CREATE</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all"
              >
                <FolderKanban className="h-4 w-4" />
                Projects
              </Link>
              <Link
                href="/tasks"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <ListTodo className="h-4 w-4" />
                Tasks
              </Link>
              <Link
                href="/calendar"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Calendar className="h-4 w-4" />
                Calendar
              </Link>
              <Link
                href="/reports"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <FileText className="h-4 w-4" />
                Reports
              </Link>
              <Link
                href="/team"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex-1 md:ml-64">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <div className="md:hidden">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <FolderKanban className="h-6 w-6 text-primary" />
                <span>CREATE</span>
              </Link>
            </div>
            <div className="w-full flex-1 md:gap-4 md:px-4 flex items-center">
              <Link
                href="/projects"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" /> Export
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate Project</DropdownMenuItem>
                    <DropdownMenuItem>Archive Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-semibold">{project.title}</h1>
                  <Badge
                    variant={
                      project.risk === "Low" ? "outline" : project.risk === "Medium" ? "secondary" : "destructive"
                    }
                  >
                    {project.risk} Risk
                  </Badge>
                </div>
                <Badge variant="outline" className="text-sm">
                  {project.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold">{project.progress}%</span>
                    <span className="text-sm text-muted-foreground">
                      {project.tasks.completed}/{project.tasks.total} Tasks
                    </span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold">${(project.budget.spent / 1000000).toFixed(1)}M</span>
                    <span className="text-sm text-muted-foreground">
                      of ${(project.budget.total / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <Progress value={(project.budget.spent / project.budget.total) * 100} className="h-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Start Date</div>
                      <div className="font-medium">{project.startDate}</div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-sm text-muted-foreground">Due Date</div>
                      <div className="font-medium">{project.dueDate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="wbs">Work Breakdown</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Overview</CardTitle>
                    <CardDescription>Key information and status of the project</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-medium">Project Details</h3>
                        <Separator className="my-2" />
                        <dl className="space-y-2">
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Client:</dt>
                            <dd className="text-sm font-medium">{project.client}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Project Manager:</dt>
                            <dd className="text-sm font-medium">{project.manager}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Start Date:</dt>
                            <dd className="text-sm font-medium">{project.startDate}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Due Date:</dt>
                            <dd className="text-sm font-medium">{project.dueDate}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Status:</dt>
                            <dd className="text-sm font-medium">{project.status}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Risk Level:</dt>
                            <dd className="text-sm font-medium">{project.risk}</dd>
                          </div>
                        </dl>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Project Metrics</h3>
                        <Separator className="my-2" />
                        <dl className="space-y-2">
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Tasks Completed:</dt>
                            <dd className="text-sm font-medium">
                              {project.tasks.completed} of {project.tasks.total}
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Budget Spent:</dt>
                            <dd className="text-sm font-medium">${(project.budget.spent / 1000000).toFixed(2)}M</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Budget Remaining:</dt>
                            <dd className="text-sm font-medium">${(project.budget.remaining / 1000000).toFixed(2)}M</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Progress:</dt>
                            <dd className="text-sm font-medium">{project.progress}%</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-muted-foreground">Team Size:</dt>
                            <dd className="text-sm font-medium">{project.team.length} members</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Recent Activity</h3>
                      <Separator className="my-2" />
                      <div className="space-y-4">
                        {[
                          {
                            action: "Task completed",
                            description: "Foundation concrete pouring completed",
                            user: "Michael Chen",
                            time: "2 hours ago",
                            icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
                          },
                          {
                            action: "Budget updated",
                            description: "Steel material costs increased by 5%",
                            user: "John Doe",
                            time: "Yesterday",
                            icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
                          },
                          {
                            action: "Milestone reached",
                            description: "Basement level construction completed",
                            user: "Sarah Johnson",
                            time: "2 days ago",
                            icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
                          },
                        ].map((activity, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="mt-1">{activity.icon}</div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium">
                                {activity.action}: {activity.description}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                By {activity.user} • {activity.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wbs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Breakdown Structure</CardTitle>
                    <CardDescription>AI-generated breakdown of project phases, milestones, and tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <WorkBreakdownStructure />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="budget" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Budget Management</CardTitle>
                    <CardDescription>Track and manage project expenses against planned budget</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectBudget />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>Visual representation of project schedule and milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectTimeline />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

