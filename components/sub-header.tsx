import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface SubHeaderProps {
  backTo?: string
  backLabel?: string
  title?: string
  badge?: string
}

export function SubHeader({ 
  backTo = "/", 
  backLabel = "Voltar", 
  title,
  badge 
}: SubHeaderProps) {
  return (
    <div className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={backTo}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel}
          </Button>
        </Link>
        {badge && (
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {badge}
          </Badge>
        )}
      </div>
    </div>
  )
}
