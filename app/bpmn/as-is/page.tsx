import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Construction } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function AsIsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo size="sm" />
          </Link>
          <Link href="/bpmn">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="border-2 border-border">
            <CardContent className="p-12 flex flex-col items-center">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                <Construction className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Diagrama AS-IS</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Em construção</p>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl">
                O diagrama do processo atual (AS-IS) está sendo desenvolvido. Em breve você poderá visualizar o fluxo de
                trabalho antes da implementação do OBSERVANTIA.
              </p>
              <Link href="/bpmn">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para BPMN
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
