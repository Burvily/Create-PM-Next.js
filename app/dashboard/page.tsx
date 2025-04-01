import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Calendar,
  Clock,
  FileText,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Plus,
  Settings,
  Users,
} from "lucide-react"
import { ProjectsOverview } from "@/components/projects-overview"
import { RecentActivity } from "@/components/recent-activity"
import { ProjectMetrics } from "@/components/project-metrics"

export default function Dashboard() {
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
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
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
            <div className="w-full flex-1 md:gap-4 md:px-4 flex justify-end">
              <Button variant="default" size="sm" className="ml-auto gap-1">
                <Plus className="h-4 w-4" /> New Project
              </Button>
            </div>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 text-2xl font-semibold">Dashboard</h1>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                      <FolderKanban className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                      <ListTodo className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">86</div>
                      <p className="text-xs text-muted-foreground">+24 from last week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Budget Utilization</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">68%</div>
                      <p className="text-xs text-muted-foreground">+4% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Time to Completion</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24 days</div>
                      <p className="text-xs text-muted-foreground">-3 days from estimate</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Projects Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <ProjectsOverview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest updates across your projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentActivity />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Project Metrics</CardTitle>
                      <CardDescription>Performance metrics for active projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ProjectMetrics />
                    </CardContent>
                  </Card>
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Upcoming Milestones</CardTitle>
                      <CardDescription>Critical milestones in the next 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            project: "Downtown Office Tower",
                            milestone: "Foundation Completion",
                            date: "Apr 15, 2025",
                            status: "On Track",
                          },
                          {
                            project: "Riverside Bridge",
                            milestone: "Steel Structure Assembly",
                            date: "Apr 22, 2025",
                            status: "At Risk",
                          },
                          {
                            project: "Metro Station Renovation",
                            milestone: "Electrical Systems Installation",
                            date: "May 3, 2025",
                            status: "On Track",
                          },
                          {
                            project: "Harbor Expansion",
                            milestone: "Dredging Phase 1",
                            date: "May 10, 2025",
                            status: "Delayed",
                          },
                        ].map((milestone, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                          >
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">{milestone.milestone}</p>
                              <p className="text-sm text-muted-foreground">{milestone.project}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-sm text-muted-foreground">{milestone.date}</div>
                              <div
                                className={`text-xs px-2 py-1 rounded-full ${
                                  milestone.status === "On Track"
                                    ? "bg-green-100 text-green-800"
                                    : milestone.status === "At Risk"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {milestone.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Milestones
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

