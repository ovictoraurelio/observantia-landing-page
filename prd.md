# **🧩 Product Requirements Document (PRD) — ObservantIA**

## **1. Visão Geral**

**Nome do Produto:** ObservantIA

**Responsáveis:** Equipe ObservantIA / IFPE (Instituto Federal de Pernambuco)

**Versão:** v0.2 – Rascunho para validação institucional

**Data:** 24/10/2025

### **1.1. Resumo Executivo**

O **ObservantIA** é uma **plataforma web open source** desenvolvida para apoiar o **IFPE** (e potencialmente outras instituições públicas) na **criação, verificação e gestão de conformidade** de **editais, contratos e documentos administrativos**.

Seu objetivo é **reduzir erros, agilizar revisões e garantir aderência às normas internas e legais**, acompanhando todo o ciclo de vida do documento — da **demanda inicial até a publicação e assinatura.**

No médio prazo, o projeto busca incorporar **Inteligência Artificial (IA)** para análise e sugestão de melhorias nos documentos, através de uma abordagem **RAG (Retrieval-Augmented Generation)**.

---

## **2. Contexto e Motivação**

### **2.1. Problema**

Atualmente, a elaboração e revisão de editais e contratos no IFPE é:

- Fragmentada entre setores (solicitante, jurídico, controle interno, publicação).
- Manual e pouco rastreável.
- Dependente de conhecimento tácito e de pessoas específicas.
- Sujeita a inconformidades jurídicas e retrabalho.

### **2.2. Oportunidade**

Criar uma solução que:

- Centralize e padronize o fluxo de documentos construídos para Edital, estando integrado com SEI.
    - Considerando que já existe o SEI (Sistema Eletrônico de Informações).
- Ofereça **checklists e validações automáticas** com base em normas e modelos pré-aprovados.
- Forneça **histórico, versionamento e indicadores de conformidade.**
    - (Lembrar: 3 a 5 indicadores de sucesso da plataforma)
- Permita futura integração de **IA** para análise textual e comparação normativa.

---

## **3. Objetivos do Produto**

### 3.0 Objetivos Gerais**
Com esses objetivos, buscamos fortalecer o setor de auditoria (Checagem de conformidade na confecção) de contratos do IFPE, garantindo processos mais transparentes, ágeis e seguros para toda a instituição.

- Padronizar processos de auditoria e validação prévia.
- Garantir transparência e rastreabilidade em todas as etapas.
- Reduzir erros e inconformidades jurídicas.
- Reduzir retrabalho.
- Reduzir tempo de processamento.

### **3.1. Objetivos Principais (MVP)**

- Padronizar o processo de **elaboração e revisão** de editais e contratos.
- Disponibilizar **modelos de documentos** revisados e consistentes.
- Realizar **checagens automáticas de conformidade básica** (ex: campos obrigatórios, prazos, referências normativas).
- Controlar **versões, revisões e status de aprovação**.
- Facilitar o **acompanhamento e publicação** dos documentos finais.
    - publicação ⇒ Lançamento de assinatura do doc. para o SEI

### **3.2. Objetivos Secundários (Futuro / Fase 2)**

- Implementar **RAG** para:
    - Sugerir correções e aprimoramentos automáticos.
    - Comparar documentos com legislações e regulamentos vigentes.
    - Detectar inconsistências e riscos de não conformidade.
- Integrar com **sistemas institucionais existentes** (ex: SEI, SUAP).
- Disponibilizar **dashboard analítico** com métricas de conformidade e tempo de tramitação.

---

## **4. Público-Alvo**

| **Categoria** | **Papel no Sistema** | **Necessidades** | Lotação |
| --- | --- | --- | --- |
| **Coordenadores de Contratos** | Elaboram minutas e rascunhos | Facilidade na criação e submissão de documentos | DLC - Diretoria de Licitações e Contratos // Reitoria

CCON - Coordenação de contratos // Campis |
| Procuradoria | Validam e revisam conteúdo | Ferramentas de checagem e histórico | PJUR - Reitoria |
| **Gestores de contrato** | Acompanham processos | Visão geral, indicadores e aprovações | Campus/Reitoria (Pode ser de qualquer setor) |
| **Auditoria interno** | Garantem conformidade | Verificações automatizadas e auditoria | AUDI // Campus

AUDI // Reitoria |
| **Comunidade e pesquisadores** | Reutilizam o código | Base **open source** e documentação acessível | *Comunidade dos Campi* |
| Integrante técnico |  | Aquele que possui domínio técnico | Reitoria ou Campi |
| Integrante requisitante |  | Aquele que trás a demanda de compra (Ele vai ser beneficiado pelo serviço) | Reitoria ou Campi |
| Integrante administrativo | (Nosso principal usuário porque ele que de fato valida a conformidade) | Se preocupa em validar se a conformidade. Lei 14/133 e demais artigos da Lei aplicáveis. | Reitoria ou Campi |

---

## **5. Escopo Funcional**

### **5.1. Módulos Principais**

1. **Gestão de Demandas**
    - Registro de solicitações de novos editais ou contratos.
    - Atribuição de responsáveis e prazos.
2. **Criação e Edição de Documentos**
    - Editor online com templates padronizados.
    - Campos obrigatórios e validações em tempo real.
3. **Checagem de Conformidade**
    - Checklists configuráveis (ex: legislação, rubrica, objeto, anexos).
    - Alertas de campos inconsistentes ou ausentes.
4. **Revisão e Aprovação**
    - Controle de versões e revisões.
    - Workflow de aprovação (solicitante → jurídico → gestor → publicação).
    1. **Publicação e Assinatura**
        - Geração do documento final (PDF, DOCX).
        - Envio para assinatura digital no SEI.
5. **Relatórios e Auditoria**
    - Logs de alteração e histórico de decisões.
    - Indicadores de conformidade
    - Indicadores de prazos.

---

## **6. Escopo Técnico (Visão Inicial)**

### **6.1. Arquitetura de Referência**

- **Frontend:** React ou Vue.js
- **Backend:**  Node.js
- **Banco de Dados:** PostgreSQL
- **Infraestrutura:** Docker + GitHub Actions (CI/CD)
- **IA (futuro):** Módulo RAG com embeddings + LLM (open source)

### **6.2. Integrações Potenciais**

- SEI (via API)

### **6.3. Licenciamento**

- Código aberto (MIT, GPLv3 ou equivalente).
- Publicação em repositório GitHub institucional.

---

## **7. Requisitos Não Funcionais**

| **Categoria** | **Requisito** |
| --- | --- |
| **Performance** | Resposta < 3s em operações comuns |
| **Segurança** | Autenticação por OAuth2 / Gov.br |
| **Disponibilidade** | 99% uptime em ambiente de produção |
| **Acessibilidade** | Conformidade com WCAG 2.1 |
| **Escalabilidade** | Modular, microserviços ou containers |
| **Manutenibilidade** | Código documentado e testado |
| **Open Source** | Código público, documentação técnica e guia de contribuição |