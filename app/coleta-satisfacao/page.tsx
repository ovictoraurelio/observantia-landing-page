"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { CheckCircle, AlertCircle, Mail, MapPin } from "lucide-react";

type Likert5 = 1 | 2 | 3 | 4 | 5;

export default function ColetaSatisfacaoPage() {
  const [anonimo, setAnonimo] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [unidade, setUnidade] = useState("");
  const [cargo, setCargo] = useState("");

  const [aderenciaSetor, setAderenciaSetor] = useState<Likert5 | null>(null);
  const [valorPercebido, setValorPercebido] = useState<Likert5 | null>(null);
  const [facilidadeUso, setFacilidadeUso] = useState<Likert5 | null>(null);
  const [prioridade, setPrioridade] = useState<Likert5 | null>(null);
  const [probAdocao, setProbAdocao] = useState<number>(5);

  const [modulos, setModulos] = useState({
    geracaoEditais: 5,
    geracaoContratos: 5,
    verificacaoConformidade: 5,
    checklistConformidade: 5,
    verificacaoConformidadeIA: 5,
    fluxoAprovacaoProcuradoria: 5,
    fluxoAprovacaoGestor: 5,
    relatorios: 5,
  });

  const [dores, setDores] = useState("");
  const [faltantes, setFaltantes] = useState("");
  const [riscos, setRiscos] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [piloto, setPiloto] = useState(false);
  const [consent, setConsent] = useState(false);

  const [enviando, setEnviando] = useState(false);
  const [okMsg, setOkMsg] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const indiceAderencia = useMemo(() => {
    if (
      aderenciaSetor === null ||
      valorPercebido === null ||
      facilidadeUso === null ||
      prioridade === null
    ) {
      return null;
    }
    const to100 = (x: number) => x * 20;
    const score =
      0.30 * to100(aderenciaSetor) +
      0.25 * to100(valorPercebido) +
      0.20 * to100(facilidadeUso) +
      0.15 * to100(prioridade) +
      0.10 * (probAdocao * 10);
    return Math.round(score);
  }, [aderenciaSetor, valorPercebido, facilidadeUso, prioridade, probAdocao]);

  const isValid =
    consent &&
    (anonimo || (nome.trim() && email.trim())) &&
    aderenciaSetor !== null &&
    valorPercebido !== null &&
    facilidadeUso !== null &&
    prioridade !== null;

  function LikertRadio({
    value,
    onChange,
    legend,
    required = false,
  }: {
    value: number | null;
    onChange: (v: Likert5) => void;
    legend: string;
    required?: boolean;
  }) {
    return (
      <div className="space-y-3">
        <label className="text-base font-medium block">
          {legend}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex gap-3 flex-wrap">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n as Likert5)}
              className={`w-12 h-12 rounded-lg border-2 font-medium transition-all ${
                value === n
                  ? "border-primary bg-primary text-white"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          1 = Muito baixo • 5 = Muito alto
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOkMsg(null);
    setErrMsg(null);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    // Adicionar valores dos campos hidden (calculados)
    formData.set("aderenciaSetor", String(aderenciaSetor || ''));
    formData.set("valorPercebido", String(valorPercebido || ''));
    formData.set("facilidadeUso", String(facilidadeUso || ''));
    formData.set("prioridade", String(prioridade || ''));
    formData.set("probAdocao", String(probAdocao));
    formData.set("geracaoEditais", String(modulos.geracaoEditais));
    formData.set("verificacaoConformidade", String(modulos.verificacaoConformidade));
    formData.set("gestaoContratos", String(modulos.gestaoContratos));
    formData.set("fluxosAprovacao", String(modulos.fluxosAprovacao));
    formData.set("auditoriaRelatorios", String(modulos.auditoriaRelatorios));
    formData.set("indiceAderencia", String(indiceAderencia || ''));
    formData.set("fonte", "Cliente");
    formData.set("versaoFormulario", "v1.0");
    formData.set("ts", new Date().toISOString());

    setEnviando(true);
    try {
      const response = await fetch("https://formspree.io/f/mpwoekvy", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        setOkMsg(
          `Obrigado! Sua resposta foi registrada. Índice de Aderência: ${indiceAderencia ?? "-"}`
        );
        // Resetar formulário após sucesso
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setErrMsg("Ocorreu um erro ao enviar sua resposta. Tente novamente.");
      }
    } catch (err) {
      setErrMsg("Falha de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="md" />
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Início
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Coleta de Satisfação — Cliente
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O objetivo desta página é medir a <strong>aderência</strong> da solução
            proposta às necessidades do IFPE. As respostas nos ajudarão a priorizar
            funcionalidades e conduzir o piloto.
          </p>
        </div>

        <form 
          action="https://formspree.io/f/mpwoekvy"
          method="POST"
          onSubmit={handleSubmit} 
          autoComplete="on"
          className="space-y-8"
        >
          {/* Campos hidden para dados calculados */}
          <input type="hidden" name="aderenciaSetor" value={aderenciaSetor || ''} />
          <input type="hidden" name="valorPercebido" value={valorPercebido || ''} />
          <input type="hidden" name="facilidadeUso" value={facilidadeUso || ''} />
          <input type="hidden" name="prioridade" value={prioridade || ''} />
          <input type="hidden" name="probAdocao" value={probAdocao} />
          <input type="hidden" name="geracaoEditais" value={modulos.geracaoEditais} />
          <input type="hidden" name="verificacaoConformidade" value={modulos.verificacaoConformidade} />
          <input type="hidden" name="gestaoContratos" value={modulos.gestaoContratos} />
          <input type="hidden" name="fluxosAprovacao" value={modulos.fluxosAprovacao} />
          <input type="hidden" name="auditoriaRelatorios" value={modulos.auditoriaRelatorios} />
          <input type="hidden" name="indiceAderencia" value={indiceAderencia || ''} />
          <input type="hidden" name="fonte" value="Cliente" />
          <input type="hidden" name="versaoFormulario" value="v1.0" />
          <input type="hidden" name="ts" value={new Date().toISOString()} />
          {/* Identificação */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Identificação</h2>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="anonimo"
                  name="anonimo"
                  type="checkbox"
                  checked={anonimo}
                  onChange={(e) => setAnonimo(e.target.checked)}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="anonimo" className="text-base">
                  Responder anonimamente
                </label>
              </div>

              {!anonimo && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-medium">Nome *</label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex.: Marco Eugênio"
                      required
                      autoComplete="name"
                      className="w-full px-3 py-2 rounded-md border border-border bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@ifpe.edu.br"
                      required
                      autoComplete="email"
                      className="w-full px-3 py-2 rounded-md border border-border bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="unidade" className="text-sm font-medium">Unidade/Setor</label>
                    <input
                      id="unidade"
                      name="unidade"
                      type="text"
                      value={unidade}
                      onChange={(e) => setUnidade(e.target.value)}
                      placeholder="Ex.: Pró-Reitoria"
                      autoComplete="organization"
                      className="w-full px-3 py-2 rounded-md border border-border bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cargo" className="text-sm font-medium">Cargo/Função</label>
                    <input
                      id="cargo"
                      name="cargo"
                      type="text"
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}
                      placeholder="Ex.: Diretor, Analista"
                      autoComplete="organization-title"
                      className="w-full px-3 py-2 rounded-md border border-border bg-background"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Métricas de Aderência */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Métricas de Aderência (obrigatórias)</h2>
              </div>

              <LikertRadio
                legend="1) A solução atende às necessidades do seu setor?"
                value={aderenciaSetor}
                onChange={setAderenciaSetor}
                required
              />

              <LikertRadio
                legend="2) Valor percebido/impacto no trabalho diário"
                value={valorPercebido}
                onChange={setValorPercebido}
                required
              />

              <LikertRadio
                legend="3) Facilidade de uso (experiência do usuário)"
                value={facilidadeUso}
                onChange={setFacilidadeUso}
                required
              />

              <LikertRadio
                legend="4) Urgência/prioridade para implantação"
                value={prioridade}
                onChange={setPrioridade}
                required
              />

              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">
                    Índice de Aderência (calculado):
                  </span>
                  <Badge variant="secondary" className="text-md">
                    {indiceAderencia !== null ? `${indiceAderencia}/100` : "—"}
                  </Badge>
                </div>
              </div>

              <br/>

              {/* <div className="space-y-3">
                <label className="text-base font-medium block">
                  Probabilidade de adoção/recomendação (0–10) *
                </label>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={probAdocao}
                  onChange={(e) => setProbAdocao(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0</span>
                  <Badge variant="secondary">{probAdocao}</Badge>
                  <span>10</span>
                </div>
              </div> */}

              
            </CardContent>
          </Card>

          {/* Relevância por Módulo */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-2">Relevância por Módulo (opcional)</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Avalie de 1 (pouco relevante) a 5 (muito relevante).
              </p>

              {[
                ["Geração de Editais", "geracaoEditais"],
                ["Geração de Contratos", "geracaoContratos"],
                ["Check-list de Conformidade", "checklistConformidade"],
                ["Verificação de Conformidade com IA", "verificacaoConformidadeIA"],
                ["Fluxo de Aprovação Procuradoria", "fluxoAprovacaoProcuradoria"],
                ["Fluxo de Aprovação Gestor", "fluxoAprovacaoGestor"],
                ["Relatórios", "relatorios"],
              ].map(([label, key]) => (
                <div key={key} className="flex items-center justify-between">
                  <label className="text-base">{label}</label>
                  <select
                    value={(modulos as any)[key]}
                    onChange={(e) =>
                      setModulos((m) => ({
                        ...m,
                        [key]: parseInt(e.target.value),
                      }))
                    }
                    className="w-20 px-2 py-1 rounded-md border border-border bg-background"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Qualitativo */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Qualitativo</h2>

              <div className="space-y-2">
                <label htmlFor="dores" className="text-sm font-medium">Top 3 dores atuais</label>
                <textarea
                  id="dores"
                  name="dores"
                  value={dores}
                  onChange={(e) => setDores(e.target.value)}
                  placeholder="Liste as principais dores e exemplos práticos."
                  rows={3}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="faltantes" className="text-sm font-medium">Funcionalidades mais necessárias (must-have)</label>
                <textarea
                  id="faltantes"
                  name="faltantes"
                  value={faltantes}
                  onChange={(e) => setFaltantes(e.target.value)}
                  placeholder="O que não pode faltar para ser adotado?"
                  rows={3}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="riscos" className="text-sm font-medium">Riscos/barreiras</label>
                <textarea
                  id="riscos"
                  name="riscos"
                  value={riscos}
                  onChange={(e) => setRiscos(e.target.value)}
                  placeholder="Ex.: integração, LGPD, orçamento..."
                  rows={3}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="comentarios" className="text-sm font-medium">Comentários gerais</label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={comentarios}
                  onChange={(e) => setComentarios(e.target.value)}
                  placeholder="Espaço livre para observações."
                  rows={3}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="piloto"
                  name="piloto"
                  type="checkbox"
                  checked={piloto}
                  onChange={(e) => setPiloto(e.target.checked)}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="piloto" className="text-base">
                  Tenho interesse em participar de um piloto
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Consentimento */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-2">Consentimento</h2>

              <div className="flex items-start gap-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="w-4 h-4 mt-1 rounded border-border"
                />
                <label htmlFor="consent" className="text-base leading-relaxed">
                  Autorizo o uso das informações para fins de pesquisa de produto, em
                  conformidade com a LGPD. *
                </label>
              </div>
              <p className="text-sm text-muted-foreground">
                Os dados serão tratados com segurança. Você pode solicitar remoção a qualquer momento.
              </p>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button 
              type="submit" 
              disabled={!isValid || enviando}
              size="lg"
              className="w-full sm:w-auto"
            >
              {enviando ? "Enviando..." : "Enviar resposta"}
            </Button>
            {!isValid && (
              <p className="text-sm text-muted-foreground">
                Preencha os campos obrigatórios e aceite o consentimento.
              </p>
            )}
          </div>

          {/* Messages */}
          {okMsg && (
            <div className="flex items-start gap-3 p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-800 dark:text-green-200">{okMsg}</p>
            </div>
          )}
          {errMsg && (
            <div className="flex items-start gap-3 p-4 rounded-lg border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 dark:text-red-200">{errMsg}</p>
            </div>
          )}
        </form>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo size="sm" showTagline />
            <div className="text-sm text-muted-foreground text-center">
              <p>© 2025 ObservantIA - Grupo 1.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contato@observantia.com.br</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
