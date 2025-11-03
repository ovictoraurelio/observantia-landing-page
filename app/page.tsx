import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle2, Users, BarChart3, Shield, GitBranch, Clock, Github, Mail } from "lucide-react"
import { Logo } from "@/components/logo"
import Image from "next/image"

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
          {/* <Badge variant="secondary" className="mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            Fase MVP - T=0 em desenvolvimento
          </Badge> */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            {/* Gestão inteligente de Editais e Contratos */}
            Da demanda por contratação à publicação, em tempo recorde
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Plataforma open source para organizar a esteira de elaboração de Editais e Contratos com checklists inteligentes e trilha de auditoria, promovendo eficiência e conformidade.
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

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Roadmap do Projeto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Acompanhe o progresso e as entregas do ObservantIA
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-border hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {/* Kickoff */}
            <div className="relative">
              <Card className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Kickoff</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Início do projeto e definição de escopo
                  </p>
                  <Badge
                    variant="secondary"
                    className="w-full justify-center bg-primary/10 text-primary border-primary/20"
                  >
                    Concluído
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Status Report 1 - Current */}
            <div className="relative">
              <Card className="border-accent shadow-lg shadow-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto relative z-10 animate-pulse">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Status Report 1</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">Primeira entrega e validação</p>
                  <Badge variant="secondary" className="w-full justify-center bg-accent text-accent-foreground mb-3">
                    Em Andamento
                  </Badge>
                  <a href="/status-report-1">
                    <Button size="sm" className="w-full">
                      Visualizar
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Status Report 2 */}
            <div className="relative">
              <Card className="border-border hover:border-primary/30 transition-colors opacity-60">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 mx-auto relative z-10">
                    <Clock className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Status Report 2</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">Segunda entrega e ajustes</p>
                  <Badge variant="secondary" className="w-full justify-center">
                    Planejado
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Entrega Final */}
            <div className="relative">
              <Card className="border-border hover:border-primary/30 transition-colors opacity-60">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 mx-auto relative z-10">
                    <FileText className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Entrega Final</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">Conclusão e apresentação</p>
                  <Badge variant="secondary" className="w-full justify-center">
                    Planejado
                  </Badge>
                </CardContent>
              </Card>
            </div>
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
            Funcionalidades completas para gestão de Editais e Contratos
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
                Transforme a gestão de Editais e Contratos da sua organização
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
              <h4 className="font-semibold mb-2 text-primary">✅ MVP entregável</h4>
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

      <section id="equipe" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Equipe Responsável</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Profissionais dedicados ao desenvolvimento da plataforma ObservantIA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Victor Aurélio */}
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image
                  src="https://ui-avatars.com/api/?name=Victor+Aurelio&size=96&background=random"
                  alt="Victor Aurélio"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Victor Aurélio</h3>
              <p className="text-sm text-muted-foreground mb-3">Gestor de Projeto</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:vags@cin.ufpe.br"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email Victor Aurélio"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/ovictoraurelio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub Victor Aurélio"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* André Campos */}
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image
                  src="https://ui-avatars.com/api/?name=Andre+Campos&size=96&background=random"
                  alt="André Campos"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">André Campos</h3>
              <p className="text-sm text-muted-foreground mb-3">Desenvolvedor Backend</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:avcl@cin.ufpe.br"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email André Campos"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub André Campos"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Alandrey Alves */}
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image
                  src="https://ui-avatars.com/api/?name=Alandrey+Alves&size=96&background=random"
                  alt="Alandrey Alves"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Alandrey Alves</h3>
              <p className="text-sm text-muted-foreground mb-3">Desenvolvedor Frontend</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:aas7@cin.ufpe.br"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email Alandrey Alves"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub Alandrey Alves"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Lucas Victor */}
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image
                  src="https://ui-avatars.com/api/?name=Lucas+Victor&size=96&background=random"
                  alt="Lucas Victor"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Lucas Victor</h3>
              <p className="text-sm text-muted-foreground mb-3">Analista de Negócios</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:lvs4@cin.ufpe.br"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email Lucas Victor"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub Lucas Victor"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Jadson Abreu */}
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image
                  src="https://ui-avatars.com/api/?name=Jadson+Abreu&size=96&background=random"
                  alt="Jadson Abreu"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jadson Abreu</h3>
              <p className="text-sm text-muted-foreground mb-3">UI Designer</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:jaas@cin.ufpe.br"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email Jadson Abreu"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub Jadson Abreu"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Raian Limeira */}
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image
                  src="https://ui-avatars.com/api/?name=Raian+Limeira&size=96&background=random"
                  alt="Raian Limeira"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Raian Limeira</h3>
              <p className="text-sm text-muted-foreground mb-3">UX Designer</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:raian.limeira@ufpe.br"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email Raian Limeira"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub Raian Limeira"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="especialistas" className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Especialistas no Tema</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Profissionais do IFPE que orientam e validam as soluções desenvolvidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-4 flex items-center justify-center">
                    <div className="text-4xl font-bold text-accent">ME</div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Prof. Msc. Marco Eugênio</h3>
                  <p className="text-sm text-muted-foreground mb-2">Instituto Federal de Pernambuco</p>
                  <Badge variant="secondary" className="mb-4">
                    Cliente e Especialista
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Especialista em gestão administrativa e processos de contratação pública no IFPE
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contato disponível em breve
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-4 flex items-center justify-center">
                    <div className="text-4xl font-bold text-accent">AS</div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">André Silva</h3>
                  <p className="text-sm text-muted-foreground mb-2">Instituto Federal de Pernambuco</p>
                  <Badge variant="secondary" className="mb-4">
                    Especialista
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Especialista em conformidade legal e validação de editais e contratos
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contato disponível em breve
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="orientadores" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Orientadores do Projeto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Professores da UFPE especialistas em Gestão de Processos e Projetos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">AV</div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Prof. Dr. Alexandre Vasconcelos</h3>
                <p className="text-sm text-muted-foreground mb-2">Centro de Informática - UFPE</p>
                <Badge variant="secondary" className="mb-4">
                  Orientador
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Especialista em Engenharia de Software, Gestão de Processos de Negócio e Planejamento de Projetos
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contato disponível em breve
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">JV</div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Profª Drª Jéssyka Vilela</h3>
                <p className="text-sm text-muted-foreground mb-2">Centro de Informática - UFPE</p>
                <Badge variant="secondary" className="mb-4">
                  Orientadora
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Especialista em Engenharia de Requisitos, Gestão de Projetos e Processos de Software
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contato disponível em breve
                </a>
              </div>
            </CardContent>
          </Card>
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
              O ObservantIA é um projeto open source desenvolvido para atender a dor real de um órgão público com elaboração de editais e contratos para contratação de bens e serviços. Contribua, adapte e
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
                Licença GPLv3 • Desenvolvido pelo Grupo 1 - Observantia • Contribuições são bem-vindas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Pronto para modernizar a gestão de Editais e Contratos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Junte-se às organizações que já estão transformando seus processos administrativos com o ObservantIA.
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
                Plataforma open source para gestão de Editais e Contratos.
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
                  <a
                    href="https://github.com/observantia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Fórum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
