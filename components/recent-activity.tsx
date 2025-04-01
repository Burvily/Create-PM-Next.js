import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      user: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MC",
      },
      action: "completed a task",
      project: "Downtown Office Tower",
      task: "Foundation concrete pouring",
      time: "2 hours ago",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
    {
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SJ",
      },
      action: "updated a milestone",
      project: "Riverside Bridge",
      task: "Steel structure assembly",
      time: "4 hours ago",
      icon: <FileText className="h-4 w-4 text-blue-500" />,
    },
    {
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      action: "reported a delay",
      project: "Metro Station Renovation",
      task: "Electrical systems installation",
      time: "Yesterday",
      icon: <AlertCircle className="h-4 w-4 text-yellow-500" />,
    },
    {
      user: {
        name: "Priya Patel",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "PP",
      },
      action: "added a new task",
      project: "Harbor Expansion",
      task: "Environmental impact assessment",
      time: "Yesterday",
      icon: <FileText className="h-4 w-4 text-blue-500" />,
    },
    {
      user: {
        name: "David Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DR",
      },
      action: "completed a milestone",
      project: "Solar Farm Installation",
      task: "Site preparation",
      time: "2 days ago",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, i) => (
        <div key={i} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action} on{" "}
              <span className="font-medium">{activity.project}</span>
            </p>
            <div className="flex items-center text-xs text-muted-foreground gap-1">
              <div className="flex items-center gap-1">
                {activity.icon}
                <span>{activity.task}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

