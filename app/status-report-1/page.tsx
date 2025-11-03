import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function StatusReport1Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            Status Report 1
          </Badge>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Status Report 1</h1>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
            Primeira entrega do projeto ObservantIA - Documentação completa e artefatos desenvolvidos
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline">Janeiro 2025</Badge>
            <Badge variant="outline">Fase MVP</Badge>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Visão Geral */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Visão Geral do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold mb-3">Sobre o ObservantIA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O ObservantIA é uma plataforma open source desenvolvida para padronizar, rastrear e validar editais e
                  contratos no IFPE. O projeto está em fase de planejamento e descoberta, focando em fluxos de trabalho humanos antes da
                  implementação de recursos de IA.
                </p>
                <h3 className="text-lg font-semibold mb-3 mt-6">Objetivos da Primeira Entrega</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Definição completa do escopo e requisitos do sistema</li>
                  <li>Modelagem de processos AS-IS e TO-BE</li>
                  <li>Arquitetura técnica e stack tecnológica</li>
                  <li>Protótipos de interface e experiência do usuário</li>
                  <li>Planejamento de desenvolvimento e cronograma</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Documentos Técnicos */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Documentos e Artefatos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* PRD */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Product Requirements Document (PRD)</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Documento completo de requisitos do produto, incluindo funcionalidades, usuários e objetivos.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href="https://observantia.notion.site/Status-Report-1-2808a012ec798075b492c49d2536d1c4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver no Notion
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* BPMN */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Diagramas BPMN</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Modelagem de processos AS-IS e TO-BE para gestão de editais e contratos.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/bpmn">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Diagramas
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arquitetura */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Arquitetura do Sistema</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Definição da stack tecnológica e arquitetura técnica da plataforma.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://github.com/observantia/cin-ufpe" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver no GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Protótipos */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Protótipos de Interface</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Wireframes e protótipos de alta fidelidade das principais telas do sistema.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" disabled>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Em breve
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Métricas e Indicadores */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Métricas e Indicadores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Documentação completa</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Artefatos entregues</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Semanas de desenvolvimento</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximos Passos */}
          <Card className="border-border bg-accent/5">
            <CardHeader>
              <CardTitle>Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-accent-foreground font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold">Desenvolvimento do MVP</div>
                    <div className="text-sm text-muted-foreground">
                      Implementação das funcionalidades core do sistema
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-accent-foreground font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold">Testes com usuários</div>
                    <div className="text-sm text-muted-foreground">Validação com equipe administrativa do IFPE</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-accent-foreground font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold">Preparação para Status Report 2</div>
                    <div className="text-sm text-muted-foreground">Documentação de progresso e ajustes necessários</div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Dúvidas ou sugestões?</h2>
          <p className="text-muted-foreground mb-6">
            Entre em contato com a equipe do ObservantIA para mais informações sobre o projeto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/#equipe">Falar com a equipe</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/observantia/cin-ufpe" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
