import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, FolderKanban, LayoutDashboard, ListTodo, Settings, Users, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { DatePicker } from "@/components/date-picker"

export default function NewProject() {
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
            </div>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold">Create New Project</h1>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Enter the basic information about your project. The AI will help generate a detailed work breakdown
                  structure.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" placeholder="Enter project name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-description">Project Description</Label>
                  <Textarea id="project-description" placeholder="Describe the project scope and objectives" rows={4} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="installation">Installation</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-priority">Priority</Label>
                    <Select>
                      <SelectTrigger id="project-priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <DatePicker />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">Estimated Completion Date</Label>
                    <DatePicker />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estimated-budget">Estimated Budget</Label>
                  <Input id="estimated-budget" placeholder="Enter budget amount" type="number" />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Project Team</Label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="project-manager">Project Manager</Label>
                      <Select>
                        <SelectTrigger id="project-manager">
                          <SelectValue placeholder="Select project manager" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="john-doe">John Doe</SelectItem>
                          <SelectItem value="jane-smith">Jane Smith</SelectItem>
                          <SelectItem value="robert-johnson">Robert Johnson</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="planning">Planning</SelectItem>
                          <SelectItem value="operations">Operations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Create Project & Generate WBS</Button>
              </CardFooter>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}

