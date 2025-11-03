# 🚀 Setup do Logo - Instruções Imediatas

## Passo 1: Salvar a Imagem do Logo

A imagem do logo que você enviou precisa ser salva no projeto:

1. **Abra a imagem do logo** que você enviou no chat
2. **Clique com botão direito** na imagem → "Salvar imagem como..."
3. **Salve no caminho**: 
   \`\`\`
   /Users/wozniak/projects/ovictoraurelio/observantia-landing-page/public/logo-observantia-source.png
   \`\`\`
4. **Nome do arquivo**: `logo-observantia-source.png`

## Passo 2: Executar Script de Otimização

Vou instalar o Sharp e executar o script para criar todas as versões otimizadas automaticamente.

Execute os comandos abaixo em sequência:

\`\`\`bash
# 1. Instalar Sharp (biblioteca de processamento de imagens)
pnpm add -D sharp

# 2. Executar script de otimização
node scripts/optimize-logo.js
\`\`\`

## O que será criado automaticamente:

✅ **logo-observantia.png** (1024x576px) - Logo principal para o site
✅ **logo-observantia-sm.png** (400x180px) - Versão pequena para headers
✅ **favicon-16.png** (16x16px) - Favicon pequeno
✅ **favicon-32.png** (32x32px) - Favicon grande
✅ **apple-touch-icon.png** (180x180px) - Ícone para dispositivos Apple
✅ **og-image.png** (1200x630px) - Imagem para redes sociais

## Passo 3: Criar Favicon.ico (Opcional)

Se você tiver ImageMagick instalado:
\`\`\`bash
cd public
convert favicon-32.png favicon-16.png favicon.ico
cd ..
\`\`\`

Ou use este site: https://www.favicon-generator.org/

## Passo 4: Iniciar o servidor e testar

\`\`\`bash
pnpm dev
\`\`\`

Acesse http://localhost:3000 para ver o logo funcionando!

---

## ⚡ Já Implementado

- ✅ Componente `<Logo>` criado e suportando imagens
- ✅ Metadata atualizada com SEO completo
- ✅ Manifest.json criado para PWA
- ✅ SVG de fallback criado
- ✅ Montserrat font integrada
- ✅ Cores e estilos configurados (#0E0A1A background, #E94E2E red)

## 🎯 Após salvar o logo e executar o script

O logo aparecerá automaticamente em:
- Header do site
- Footer do site
- Favicon do navegador
- Preview de redes sociais (Open Graph)
- Ícone de dispositivos Apple

---

**Me avise quando tiver salvo o arquivo `logo-observantia-source.png` e eu continuo com os próximos passos!**
