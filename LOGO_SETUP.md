# OBSERVANTIA Logo Setup Guide

## Quick Setup

### 1. Save the Official Logo Image

Save the official logo image provided as:
- **Main logo**: `/public/logo-observantia.png` (1024x576px or higher)
- **Favicon**: `/public/favicon.ico` (32x32px)
- **Apple Touch Icon**: `/public/apple-touch-icon.png` (180x180px)
- **Open Graph**: `/public/og-image.png` (1200x630px)

### 2. Required Logo Versions

Create these optimized versions from the official logo:

#### **Main Logo (PNG)**
- **File**: `logo-observantia.png`
- **Size**: 1024x576px (maintaining aspect ratio)
- **Format**: PNG with transparency
- **Background**: Dark (#1E1E1E) or transparent
- **Location**: `/public/logo-observantia.png`

#### **Favicon**
- **File**: `favicon.ico`
- **Size**: 32x32px, 16x16px (multi-size ICO)
- **Format**: ICO
- **Location**: `/public/favicon.ico`

#### **Apple Touch Icon**
- **File**: `apple-touch-icon.png`
- **Size**: 180x180px
- **Format**: PNG
- **Location**: `/public/apple-touch-icon.png`

#### **Open Graph Image**
- **File**: `og-image.png`
- **Size**: 1200x630px
- **Format**: PNG
- **Location**: `/public/og-image.png`

#### **Small Versions for Headers**
- **File**: `logo-observantia-sm.png`
- **Size**: 400x180px
- **Format**: PNG with transparency
- **Location**: `/public/logo-observantia-sm.png`

### 3. Using ImageMagick (Optional)

If you have ImageMagick installed, use these commands to create optimized versions:

```bash
# Navigate to public folder
cd public

# Create favicon (requires original logo-observantia.png)
convert logo-observantia.png -resize 32x32 favicon-32.png
convert logo-observantia.png -resize 16x16 favicon-16.png
convert favicon-32.png favicon-16.png favicon.ico

# Create Apple Touch Icon
convert logo-observantia.png -resize 180x180 apple-touch-icon.png

# Create Open Graph Image
convert logo-observantia.png -resize 1200x630 -gravity center -extent 1200x630 og-image.png

# Create small version
convert logo-observantia.png -resize 400x180 logo-observantia-sm.png
```

### 4. Alternative: Online Tools

Use these online tools to create optimized versions:
- **Favicon Generator**: https://realfavicongenerator.net/
- **Image Resizer**: https://www.iloveimg.com/resize-image
- **PNG Optimizer**: https://tinypng.com/

## Logo Component Usage

The Logo component supports both image and text modes:

```tsx
// Default: Uses image mode
<Logo size="md" />

// With text fallback
<Logo size="lg" variant="text" showTagline />

// Small size
<Logo size="sm" />
```

### Logo Specifications

Based on the official design:
- **Font**: Sans-serif (similar to Arial or Helvetica)
- **Colors**:
  - Background: `#1E1E1E` (dark gray)
  - "OBSERVANT": `#FFFFFF` (white)
  - "IA": `#E94E2E` (red)
  - Tagline: `#FFFFFF` (white)
- **Tagline**: "TRANSPARÊNCIA E CONFORMIDADE EM CADA CONTRATO"
- **Letter Spacing**: Wide spacing on tagline

## Current Implementation

The project is configured to use:
1. **Primary Logo**: `/public/logo-observantia.png` (needs to be added)
2. **SVG Fallback**: `/public/logo-observantia.svg` (included)
3. **Text Fallback**: Montserrat font with matching colors

## Next Steps

1. ✅ Logo component created with image support
2. ⏳ Save official PNG logo as `logo-observantia.png`
3. ⏳ Create optimized versions (favicon, apple-touch-icon, og-image)
4. ⏳ Update `layout.tsx` metadata with new icons
5. ⏳ Test logo display across all pages

## Notes

- The SVG version is a simplified recreation and should be replaced with the official PNG
- Ensure all logo files maintain the brand's visual identity
- Test logos on both light and dark backgrounds
- Verify logo displays correctly on all devices (mobile, tablet, desktop)
