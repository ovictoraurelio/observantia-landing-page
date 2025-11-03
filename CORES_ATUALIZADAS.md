# Paleta de Cores OBSERVANTIA - Atualizada

## Mudancas Aplicadas no globals.css

### ANTES (Azul Institucional):
- Primary: oklch com hue 250 (azul)
- Accent: oklch com hue 200 (ciano/azul)
- Todas as cores tinham tonalidade azul

### AGORA (Vermelho OBSERVANTIA):
- Primary: oklch(0.55 0.22 25) - Vermelho aproximado de #E94E2E
- Accent: oklch(0.58 0.22 25) - Mesmo vermelho
- Todas as cores neutras (sem tonalidade azul)

## Cores Principais:

### Light Mode (:root)
```css
--primary: oklch(0.55 0.22 25);        /* Vermelho OBSERVANTIA */
--accent: oklch(0.55 0.22 25);         /* Vermelho OBSERVANTIA */
--background: oklch(0.99 0 0);         /* Branco quase puro */
--foreground: oklch(0.18 0 0);         /* Preto suave */
--border: oklch(0.9 0.005 0);          /* Cinza claro neutro */
--muted: oklch(0.96 0.005 0);          /* Cinza muito claro */
```

### Dark Mode (.dark)
```css
--background: #0E0A1A;                 /* Roxo escuro OBSERVANTIA */
--primary: oklch(0.58 0.22 25);        /* Vermelho mais claro */
--accent: oklch(0.58 0.22 25);         /* Vermelho mais claro */
--foreground: oklch(0.97 0 0);         /* Branco quase puro */
--border: oklch(0.25 0.02 0);          /* Cinza escuro neutro */
--card: oklch(0.18 0.01 0);            /* Cinza muito escuro */
```

## Esquema de Cores OKLCH:

O OKLCH usa 3 valores:
1. **L (Lightness)**: 0 = preto, 1 = branco
2. **C (Chroma)**: Saturacao, quanto maior mais vibrante
3. **H (Hue)**: Matiz em graus (0-360)
   - 0-60: Vermelhos/Laranjas
   - 120-180: Verdes
   - 240-300: Azuis
   
### Vermelho OBSERVANTIA:
- Hue: 25 (vermelho/laranja)
- Chroma: 0.22 (bem saturado)
- Lightness: 0.55-0.58 (medio)

## O que foi removido:
- ❌ Todas as referencias a hue 250 (azul)
- ❌ Todas as referencias a hue 200 (ciano)
- ❌ Todas as referencias a hue 220, 240, 260 (tons de azul)

## O que foi adicionado:
- ✅ Hue 25 como cor principal (vermelho OBSERVANTIA)
- ✅ Hues 15-35 para variações de vermelho nos charts
- ✅ Neutralidade (chroma 0) em cinzas e backgrounds

## Onde as cores aparecem:

### Primary (Vermelho):
- Botoes principais
- Links em hover
- Icones destacados
- Badges importantes
- Rings de focus

### Accent (Vermelho):
- Elementos secundarios destacados
- Hover states
- Cards em destaque

### Background (#0E0A1A):
- Fundo principal em dark mode
- Tom roxo muito escuro

## Como testar:

1. Reinicie o servidor: `pnpm dev`
2. Forcce refresh: Cmd+Shift+R (Mac) ou Ctrl+Shift+R (Windows)
3. Verifique:
   - ✅ Botoes devem ser vermelhos
   - ✅ Links em hover vermelhos
   - ✅ Sem traces de azul
   - ✅ Background escuro roxo
   - ✅ Logo com cores corretas

## Notas:

- Os warnings CSS sobre @custom-variant, @theme sao normais
- OKLCH e um espaco de cores moderno suportado por navegadores modernos
- As cores foram ajustadas para manter contraste e acessibilidade
