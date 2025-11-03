# Paleta de Cores Final - OBSERVANTIA

## Filosofia de Design

**Vermelho (#E94E2E)**: Apenas para ações principais
**Cinza**: Para a maior parte da interface

## Distribuição de Cores

### Onde o VERMELHO aparece (limitado):
- ✅ Botões primários (Call-to-action)
- ✅ Logo "IA" 
- ✅ Ring de focus (quando elemento está focado)
- ✅ Chart principal (chart-1)
- ✅ Sidebar primary (quando necessário)

### Onde o CINZA aparece (maioria):
- ✅ Botões secundários
- ✅ Cards e containers
- ✅ Borders e separadores
- ✅ Inputs de formulário
- ✅ Elementos accent
- ✅ Charts secundários (chart-2, 3, 4, 5)
- ✅ Backgrounds de sidebar
- ✅ Hover states não-primários

## Cores Detalhadas

### Light Mode:
\`\`\`css
/* Vermelho - Apenas Primary */
--primary: oklch(0.55 0.22 25);           /* Vermelho OBSERVANTIA */
--ring: oklch(0.55 0.22 25);              /* Focus ring vermelho */
--chart-1: oklch(0.55 0.22 25);           /* Chart principal vermelho */

/* Cinzas - Maioria da UI */
--secondary: oklch(0.94 0.01 0);          /* Cinza muito claro */
--accent: oklch(0.40 0.02 0);             /* Cinza médio escuro */
--border: oklch(0.9 0.01 0);              /* Cinza claro */
--input: oklch(0.92 0.01 0);              /* Cinza muito claro */
--chart-2: oklch(0.50 0.03 0);            /* Cinza médio */
--chart-3: oklch(0.40 0.02 0);            /* Cinza escuro */
--chart-4: oklch(0.60 0.03 0);            /* Cinza claro */
--chart-5: oklch(0.70 0.02 0);            /* Cinza muito claro */
\`\`\`

### Dark Mode:
\`\`\`css
/* Vermelho - Apenas Primary */
--primary: oklch(0.58 0.22 25);           /* Vermelho um pouco mais claro */
--ring: oklch(0.58 0.22 25);              /* Focus ring vermelho */
--chart-1: oklch(0.58 0.22 25);           /* Chart principal vermelho */

/* Cinzas - Maioria da UI */
--background: #0E0A1A;                     /* Roxo escuro de fundo */
--card: oklch(0.20 0.01 0);               /* Cinza escuro para cards */
--secondary: oklch(0.28 0.02 0);          /* Cinza médio escuro */
--accent: oklch(0.45 0.03 0);             /* Cinza médio */
--border: oklch(0.28 0.02 0);             /* Cinza escuro */
--input: oklch(0.26 0.02 0);              /* Cinza muito escuro */
--chart-2: oklch(0.55 0.03 0);            /* Cinza médio claro */
--chart-3: oklch(0.45 0.02 0);            /* Cinza médio */
--chart-4: oklch(0.65 0.03 0);            /* Cinza claro */
--chart-5: oklch(0.75 0.02 0);            /* Cinza muito claro */
\`\`\`

## Comparação: Antes vs Agora

### ANTES (Muito Vermelho):
\`\`\`
primary: VERMELHO
accent: VERMELHO
charts: TODOS VERMELHO
sidebar-ring: VERMELHO
\`\`\`

### AGORA (Equilibrado):
\`\`\`
primary: VERMELHO (apenas botões principais)
accent: CINZA
charts: 1 vermelho, 4 cinzas
sidebar-ring: CINZA
\`\`\`

## Proporção Visual

- 🔴 Vermelho: ~10-15% da interface
- ⚪ Cinza: ~85-90% da interface

## Elementos por Cor

### Vermelho (Destacar):
1. Botão "Solicitar Acesso"
2. Botão "Ver no GitHub"
3. Logo "IA" 
4. Focus rings
5. Gráfico principal

### Cinza (Base):
1. Todos os cards
2. Navegação
3. Footer
4. Borders
5. Inputs
6. Botões secundários
7. Sidebar
8. Gráficos 2-5
9. Hover states sutis
10. Backgrounds de seções

## Como Testar

\`\`\`bash
# Reinicie o servidor
pnpm dev

# Force refresh
Cmd+Shift+R (Mac) ou Ctrl+Shift+R (Windows)
\`\`\`

## Resultado Esperado

Você deve ver:
- ✅ Interface predominantemente em tons de cinza
- ✅ Vermelho apenas em botões principais e logo
- ✅ Visual mais sutil e profissional
- ✅ Vermelho chama atenção onde é necessário
- ✅ Não há "excesso" de vermelho
