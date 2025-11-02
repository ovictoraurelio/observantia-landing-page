import { Button } from "@/components/ui/button"
import { FileText, ArrowLeft, ZoomIn, Download } from "lucide-react"
import Link from "next/link"

export default function ToBePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">ObservantIA</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="/bpmn/observantia-2.svg" download>
                <Download className="w-4 h-4 mr-2" />
                Baixar SVG
              </a>
            </Button>
            <Link href="/bpmn">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Diagrama TO-BE - ObservantIA</h1>
          <p className="text-muted-foreground">Processo otimizado com o ObservantIA implementado e em operação</p>
        </div>

        {/* BPMN Diagram Container */}
        <div className="bg-card border border-border rounded-lg p-4 overflow-auto">
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <ZoomIn className="w-4 h-4" />
            <span>Use Ctrl + scroll ou pinch para zoom. Arraste para navegar pelo diagrama.</span>
          </div>
          <div className="min-w-max">
            <img
              src="/bpmn/observantia-2.svg"
              alt="Diagrama BPMN TO-BE do ObservantIA"
              className="w-full h-auto"
              style={{ minWidth: "3610px" }}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 p-6 bg-muted/30 rounded-lg border border-border">
          <h3 className="font-semibold mb-3">Sobre este diagrama</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Este diagrama BPMN representa o fluxo de trabalho completo do ObservantIA, incluindo todas as raias (lanes)
            de responsabilidade: Solicitante, Administrativo, Técnico, Jurídico (PJUR), Gestor/Aprovador e Auditoria
            Interna.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Principais etapas:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Criação e registro de demandas</li>
                <li>• Elaboração de documentos</li>
                <li>• Validação administrativa e técnica</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Fluxos de aprovação:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Revisão jurídica (PJUR)</li>
                <li>• Aprovação de gestores</li>
                <li>• Auditoria e controle</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
