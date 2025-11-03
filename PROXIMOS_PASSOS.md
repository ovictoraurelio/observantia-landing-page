# Proximos Passos - Setup do Logo OBSERVANTIA

## O QUE JA FOI FEITO

1. Componente Logo criado e integrado
2. Todas as paginas atualizadas (header e footer)
3. Metadata e SEO configurados
4. Script de otimizacao criado
5. Manifest.json para PWA
6. Sharp em instalacao (background)
7. Cores e fontes aplicadas
8. SVG de fallback criado

## O QUE VOCE PRECISA FAZER AGORA

### Passo 1: Salvar o Logo Oficial

Salve a imagem do logo que voce enviou no chat:

- Local: /Users/wozniak/projects/ovictoraurelio/observantia-landing-page/public/
- Nome: logo-observantia-source.png

Como fazer:
1. Clique com botao direito na imagem do logo no chat
2. "Salvar imagem como..."
3. Navegue ate a pasta public do projeto
4. Salve com o nome: logo-observantia-source.png

### Passo 2: Verificar instalacao do Sharp

```bash
pnpm list sharp
```

Se nao aparecer, instale manualmente:
```bash
pnpm add -D sharp
```

### Passo 3: Executar o script de otimizacao

```bash
node scripts/optimize-logo.js
```

O que sera criado:
- logo-observantia.png (1024x576) - Logo principal
- logo-observantia-sm.png (400x180) - Versao pequena
- favicon-16.png (16x16) - Favicon
- favicon-32.png (32x32) - Favicon
- apple-touch-icon.png (180x180) - Apple devices
- og-image.png (1200x630) - Redes sociais

### Passo 4: Criar favicon.ico (Opcional)

Opcao A - Com ImageMagick:
```bash
cd public
convert favicon-32.png favicon-16.png favicon.ico
cd ..
```

Opcao B - Online:
https://www.favicon-generator.org/

### Passo 5: Testar tudo

```bash
pnpm dev
```

Verificar:
- Logo aparece no header (todas as paginas)
- Logo aparece no footer
- Favicon aparece na aba do navegador
- Logo responsivo (mobile, tablet, desktop)

## Estrutura Final

```
public/
├── logo-observantia-source.png  <- ADICIONAR (voce)
├── logo-observantia.png         <- Criado pelo script
├── logo-observantia-sm.png      <- Criado pelo script
├── logo-observantia.svg         <- Ja existe (fallback)
├── favicon.ico                  <- Criar (passo 4)
├── favicon-16.png               <- Criado pelo script
├── favicon-32.png               <- Criado pelo script
├── apple-touch-icon.png         <- Criado pelo script
├── og-image.png                 <- Criado pelo script
└── manifest.json                <- Ja existe
```

## Resumo Rapido

1. Salve: logo-observantia-source.png na pasta public/
2. Execute: node scripts/optimize-logo.js
3. (Opcional) Crie: favicon.ico
4. Teste: pnpm dev

## Se algo der errado

**Sharp nao encontrado:**
```bash
pnpm add -D sharp
```

**Source logo nao encontrado:**
- Verifique se salvou como: public/logo-observantia-source.png
- Nome exato, com extensao .png

**Logo nao aparece:**
- Limpe o cache: Ctrl+Shift+R
- Verifique se logo-observantia.png existe em public/
- Veja o console do navegador (F12)

## Depois que tudo funcionar

O logo oficial estara integrado em:
- Header de todas as paginas
- Footer da pagina principal
- Favicon do navegador
- Preview de redes sociais
- Icone de dispositivos Apple
- PWA

Documentacao completa em: LOGO_SETUP.md e SETUP_LOGO_NOW.md
