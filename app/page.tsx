import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Clock, FileText, FolderKanban, PieChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <FolderKanban className="h-6 w-6 text-primary" />
            <span>CREATE</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Help
              </Button>
              <Button size="sm">Sign In</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Project Management
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    CREATE empowers construction and engineering teams with AI-driven insights, structured workflows,
                    and real-time monitoring.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button size="lg" variant="outline">
                      View Demo Projects
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>AI-Powered Project Management</CardTitle>
                    <CardDescription>
                      Streamline your construction and engineering projects with intelligent planning and monitoring
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4 rounded-md border p-4">
                      <BarChart3 className="h-8 w-8 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium leading-none">Automated Work Breakdown Structure</h3>
                        <p className="text-sm text-muted-foreground">
                          Detailed breakdown of project phases, milestones, and dependencies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-md border p-4">
                      <PieChart className="h-8 w-8 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium leading-none">Cost Estimation & Budgeting</h3>
                        <p className="text-sm text-muted-foreground">
                          Accurate budget estimates and expense tracking for each phase
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-md border p-4">
                      <Clock className="h-8 w-8 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium leading-none">Real-Time Project Monitoring</h3>
                        <p className="text-sm text-muted-foreground">
                          Track progress, receive insights, and manage risks effectively
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-md border p-4">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium leading-none">Report Generation & Insights</h3>
                        <p className="text-sm text-muted-foreground">
                          Automated performance reports and actionable recommendations
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/dashboard" className="w-full">
                      <Button className="w-full">Start Your First Project</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

