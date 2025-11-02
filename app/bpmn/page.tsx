import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BPMNPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">ObservantIA</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              Voltar ao início
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Modelagem de Processos BPMN</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Visualize os fluxos de trabalho do ObservantIA através de diagramas BPMN detalhados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AS-IS Button */}
            <Link href="/bpmn/as-is" className="group">
              <Card className="border-2 border-border hover:border-primary transition-all duration-300 h-full cursor-pointer">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <FileText className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">AS-IS</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Processo atual de gestão documental antes da implementação do ObservantIA
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                    Ver diagrama
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* TO-BE Button */}
            <Link href="/bpmn/to-be" className="group">
              <Card className="border-2 border-border hover:border-accent transition-all duration-300 h-full cursor-pointer">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <FileText className="w-10 h-10 text-accent transition-colors" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">TO-BE</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Processo otimizado com o ObservantIA implementado e em operação
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                    Ver diagrama
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Info Section */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Sobre os diagramas BPMN</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Os diagramas BPMN (Business Process Model and Notation) representam visualmente os fluxos de trabalho,
              facilitando a compreensão dos processos administrativos e identificando oportunidades de melhoria.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
