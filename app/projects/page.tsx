import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowUpRight,
  Calendar,
  FileText,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Plus,
  Search,
  Settings,
  Users,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Projects() {
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
            <div className="w-full flex-1 md:gap-4 md:px-4 flex justify-end">
              <Link href="/projects/new">
                <Button variant="default" size="sm" className="ml-auto gap-1">
                  <Plus className="h-4 w-4" /> New Project
                </Button>
              </Link>
            </div>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Projects</h1>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="w-[200px] pl-8 md:w-[260px] bg-background"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Projects</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="on-hold">On Hold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Downtown Office Tower",
                  description: "Construction of a 30-story office building in the city center",
                  progress: 45,
                  status: "In Progress",
                  budget: "$24.5M",
                  tasks: { completed: 86, total: 210 },
                  dueDate: "Dec 15, 2025",
                  risk: "Medium",
                },
                {
                  title: "Riverside Bridge",
                  description: "Design and construction of a suspension bridge across the river",
                  progress: 32,
                  status: "In Progress",
                  budget: "$18.2M",
                  tasks: { completed: 54, total: 180 },
                  dueDate: "Aug 30, 2025",
                  risk: "High",
                },
                {
                  title: "Metro Station Renovation",
                  description: "Complete renovation of the central metro station",
                  progress: 68,
                  status: "In Progress",
                  budget: "$12.8M",
                  tasks: { completed: 124, total: 165 },
                  dueDate: "May 20, 2025",
                  risk: "Low",
                },
                {
                  title: "Harbor Expansion",
                  description: "Expansion of the commercial harbor to increase capacity",
                  progress: 22,
                  status: "In Progress",
                  budget: "$32.1M",
                  tasks: { completed: 42, total: 230 },
                  dueDate: "Feb 28, 2026",
                  risk: "Medium",
                },
                {
                  title: "Solar Farm Installation",
                  description: "Installation of a 50MW solar farm on the outskirts of the city",
                  progress: 12,
                  status: "In Progress",
                  budget: "$15.6M",
                  tasks: { completed: 18, total: 145 },
                  dueDate: "Nov 10, 2025",
                  risk: "Low",
                },
                {
                  title: "Hospital Wing Addition",
                  description: "Construction of a new wing for the regional hospital",
                  progress: 5,
                  status: "Just Started",
                  budget: "$28.4M",
                  tasks: { completed: 8, total: 195 },
                  dueDate: "Apr 15, 2026",
                  risk: "Medium",
                },
              ].map((project, i) => (
                <Link href={`/projects/${i + 1}`} key={i} className="block">
                  <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{project.title}</CardTitle>
                        <Badge
                          variant={
                            project.risk === "Low" ? "outline" : project.risk === "Medium" ? "secondary" : "destructive"
                          }
                        >
                          {project.risk} Risk
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Budget</span>
                          <span className="font-medium">{project.budget}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Due Date</span>
                          <span className="font-medium">{project.dueDate}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Tasks</span>
                          <span className="font-medium">
                            {project.tasks.completed}/{project.tasks.total}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Status</span>
                          <span className="font-medium">{project.status}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full gap-1">
                        View Details <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

