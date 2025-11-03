"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MainHeader } from "@/components/main-header"
import { SubHeader } from "@/components/sub-header"
import { FileText, ExternalLink, Download, Eye, X } from "lucide-react"
import Link from "next/link"

export default function StatusReport1Page() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      <SubHeader backTo="/" backLabel="Voltar" badge="Status Report 1" />

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Status Report 1</h1>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
            Primeira entrega do projeto ObservantIA - Documentação e artefatos desenvolvidos
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline">Novembro 2025</Badge>
            <Badge variant="outline">Status Report 1</Badge>
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
                Visão Geral do 1º Status Report
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

              {/* Fluxo AS-IS */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Fluxo AS-IS</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Mapeamento do processo atual de gestão de editais e contratos no IFPE.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href="#fluxo-as-is">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visualizar Fluxo
                          </a>
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

              {/* Matriz CSD */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Matriz CSD</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Customer Scenario Discovery - Mapeamento de cenários do cliente e identificação de dores.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href="#matrizes-visualizacao">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visualizar
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Matriz SIPOC */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Matriz SIPOC</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supplier, Input, Process, Output, Customer - Análise completa de processos e stakeholders.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href="#matrizes-visualizacao">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visualizar
                          </a>
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

          
        </div>
      </section>

      {/* Matrizes - Visualização */}
      <section id="matrizes-visualizacao" className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Matrizes de Análise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visualização das matrizes CSD e SIPOC desenvolvidas para análise detalhada dos processos e cenários do cliente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Matriz CSD */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Matriz CSD - Customer Scenario Discovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Mapeamento completo dos cenários do cliente, identificando dores, necessidades e oportunidades de melhoria no processo atual.
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="space-y-3">
                      <img 
                        src="/entregaveis/MatrizCSD.png" 
                        alt="Matriz CSD - Customer Scenario Discovery"
                        className="w-full h-auto rounded-lg border border-border/50"
                      />
                      <div className="text-center">
                        <h4 className="font-semibold">Matriz CSD</h4>
                        <p className="text-sm text-muted-foreground">Análise de Cenários do Cliente</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href="/entregaveis/MatrizCSD.png" download>
                        <Download className="w-4 h-4 mr-2" />
                        Baixar arquivo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedImage({ src: "/entregaveis/MatrizCSD.png", alt: "Matriz CSD - Customer Scenario Discovery" })}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ampliar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Matriz SIPOC */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Matriz SIPOC - Supplier, Input, Process, Output, Customer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Análise detalhada dos stakeholders, processos, entradas, saídas e controles para compreensão completa do ecossistema do projeto.
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="space-y-3">
                      <img 
                        src="/entregaveis/MatrizSIPOC.png" 
                        alt="Matriz SIPOC - Supplier, Input, Process, Output, Customer"
                        className="w-full h-auto rounded-lg border border-border/50"
                      />
                      <div className="text-center">
                        <h4 className="font-semibold">Matriz SIPOC</h4>
                        <p className="text-sm text-muted-foreground">Análise de Processos e Stakeholders</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href="/entregaveis/MatrizSIPOC.png" download>
                        <Download className="w-4 h-4 mr-2" />
                        Baixar arquivo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedImage({ src: "/entregaveis/MatrizSIPOC.png", alt: "Matriz SIPOC - Supplier, Input, Process, Output, Customer" })}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ampliar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              As matrizes estão disponíveis para download e análise detalhada. Elas formam a base para o desenvolvimento das funcionalidades do ObservantIA.
            </p>
          </div>
        </div>
      </section>

      {/* Fluxo AS-IS - Visualização */}
      <section id="fluxo-as-is" className="container mx-auto px-4 py-12 md:py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fluxo AS-IS</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mapeamento detalhado do processo atual de gestão de editais e contratos no IFPE, 
              identificando pontos de melhoria e oportunidades para otimização.
            </p>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Processo Atual - Gestão de Editais e Contratos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6 border border-border">
                  <img 
                    src="/entregaveis/fluxo-as-is.svg" 
                    alt="Fluxo AS-IS - Processo atual de gestão de editais e contratos"
                    className="w-full h-auto rounded-lg border border-border/50"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Identificados</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 12 etapas principais</li>
                      <li>• Vários pontos de gargalo</li>
                      <li>• Múltiplos stakeholders envolvidos</li>
                    </ul>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Principais Dores</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Processo manual</li>
                      <li>• Falta de padronização</li>
                      <li>• Dificuldade de rastreabilidade</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 border border-border">
                    <h4 className="font-semibold mb-2">Oportunidades</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Automação de etapas</li>
                      <li>• Centralização de informações</li>
                      <li>• Melhoria na auditoria</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href="/entregaveis/fluxo-as-is.svg" download>
                      <Download className="w-4 h-4 mr-2" />
                      Baixar arquivo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setSelectedImage({ src: "/entregaveis/fluxo-as-is.svg", alt: "Fluxo AS-IS - Processo atual de gestão de editais e contratos" })}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ampliar
                  </Button>
                </div>
              </div>
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

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto text-left">
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

      {/* Dialog para visualização fullscreen */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 overflow-auto border-0">
          <div className="relative w-full min-h-screen bg-background/95 backdrop-blur-sm">
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <div className="w-full p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto cursor-zoom-in hover:cursor-zoom-out"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    onClick={(e) => {
                      const img = e.currentTarget
                      if (img.style.transform === 'scale(1.5)') {
                        img.style.transform = 'scale(1)'
                        img.style.cursor = 'zoom-in'
                      } else {
                        img.style.transform = 'scale(1.5)'
                        img.style.cursor = 'zoom-out'
                      }
                    }}
                  />
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Clique na imagem para dar zoom • Use scroll para navegar
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
