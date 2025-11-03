import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle2, Users, BarChart3, Shield, GitBranch, Clock, FileCheck } from "lucide-react"
import { Logo } from "@/components/logo"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="md" />
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#funcionalidades"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#tecnologia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tecnologia
            </a>
            <a href="#open-source" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Open Source
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
            <Button size="sm">Solicitar Acesso</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            Fase MVP - T=0 em desenvolvimento
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Gestão inteligente de documentos administrativos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Plataforma open source para padronizar, rastrear e validar editais e contratos no IFPE com eficiência,
            transparência e conformidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Começar agora
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Ver documentação
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">≥80%</div>
              <div className="text-sm text-muted-foreground">Taxa de conformidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">≤5 dias</div>
              <div className="text-sm text-muted-foreground">Tempo médio de revisão</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">≤2</div>
              <div className="text-sm text-muted-foreground">Revisões por documento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Open source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Funcionalidades completas para gestão documental
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ferramentas integradas para cada etapa do processo administrativo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão de Demandas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Registro e acompanhamento de solicitações com atribuição de responsáveis e controle de prazos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Validação Automática</h3>
              <p className="text-muted-foreground leading-relaxed">
                Checklists configuráveis para garantir conformidade com campos obrigatórios e referências legais.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fluxo de Aprovação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Revisão colaborativa com múltiplos papéis: administrativo, jurídico, gestor e auditoria.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Controle de Versões</h3>
              <p className="text-muted-foreground leading-relaxed">
                Histórico completo de alterações com rastreamento de cada iteração do documento.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auditoria Completa</h3>
              <p className="text-muted-foreground leading-relaxed">
                Logs automáticos de todas as ações para transparência e conformidade institucional.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Indicadores de Desempenho</h3>
              <p className="text-muted-foreground leading-relaxed">
                Métricas de prazo, conformidade e retrabalho para apoiar decisões de gestão.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Transforme a gestão documental do seu campus
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Redução de tempo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Automatize validações e reduza o tempo médio de revisão de documentos em até 60%.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Maior conformidade</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Garanta que todos os documentos atendam aos requisitos legais e institucionais.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Transparência total</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rastreie cada ação e decisão com auditoria completa e histórico detalhado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Colaboração eficiente</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Integre equipes administrativas, jurídicas e de gestão em um único fluxo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium">Status do Documento</span>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Em Revisão
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Validação Administrativa</div>
                        <div className="text-xs text-muted-foreground">Aprovado em 12/01/2025</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Revisão Jurídica</div>
                        <div className="text-xs text-muted-foreground">Aprovado em 15/01/2025</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Aprovação Final</div>
                        <div className="text-xs text-muted-foreground">Aguardando gestor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Tecnologia moderna e confiável</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Stack tecnológica robusta para garantir performance, segurança e escalabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold mb-2">React + TypeScript</div>
              <p className="text-sm text-muted-foreground">Interface moderna e responsiva</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold mb-2">Node.js + Express</div>
              <p className="text-sm text-muted-foreground">API RESTful escalável</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold mb-2">PostgreSQL</div>
              <p className="text-sm text-muted-foreground">Banco de dados robusto</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-8 bg-muted/30 rounded-lg border border-border max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Roadmap de Evolução</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-primary">✅ Fase Atual (T=0)</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Gestão de demandas e documentos</li>
                <li>• Fluxo de aprovação multi-nível</li>
                <li>• Validação por checklists</li>
                <li>• Auditoria e relatórios básicos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">🚀 Próximas Fases</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Inteligência Artificial (RAG)</li>
                <li>• Integração com SEI</li>
                <li>• Dashboard analítico avançado</li>
                <li>• Suporte multi-campus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="open-source" className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Código aberto, transparência institucional
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
              O ObservantIA é um projeto open source desenvolvido para e pela comunidade do IFPE. Contribua, adapte e
              evolua a plataforma junto conosco.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Ver no GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Documentação técnica
              </Button>
            </div>
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/80">
                Licença GPLv3 • Desenvolvido pelo IFPE Reitoria • Contribuições bem-vindas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Pronto para modernizar sua gestão documental?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Junte-se aos campi do IFPE que já estão transformando seus processos administrativos com o ObservantIA.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Solicitar demonstração
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Falar com a equipe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo size="md" showTagline className="mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Plataforma open source para gestão documental no IFPE.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#funcionalidades" className="hover:text-foreground transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-foreground transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#tecnologia" className="hover:text-foreground transition-colors">
                    Tecnologia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Guia de uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Comunidade</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contribuir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Licença
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 ObservantIA - IFPE. Todos os direitos reservados. Licença GPLv3.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
