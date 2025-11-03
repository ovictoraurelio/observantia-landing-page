#!/usr/bin/env node

/**
 * Logo Optimization Script
 * 
 * This script creates optimized versions of the logo for different use cases.
 * Requires Sharp library: pnpm add -D sharp
 * 
 * Usage:
 *   node scripts/optimize-logo.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Sharp is not installed. Install it with: pnpm add -D sharp');
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SOURCE_LOGO = path.join(PUBLIC_DIR, 'logo-observantia-source.png');
const OUTPUT_FILES = {
  main: path.join(PUBLIC_DIR, 'logo-observantia.png'),
  small: path.join(PUBLIC_DIR, 'logo-observantia-sm.png'),
  favicon16: path.join(PUBLIC_DIR, 'favicon-16.png'),
  favicon32: path.join(PUBLIC_DIR, 'favicon-32.png'),
  appleTouchIcon: path.join(PUBLIC_DIR, 'apple-touch-icon.png'),
  ogImage: path.join(PUBLIC_DIR, 'og-image.png'),
};

async function optimizeLogo() {
  console.log('🎨 Starting logo optimization...\n');

  // Check if source logo exists
  if (!fs.existsSync(SOURCE_LOGO)) {
    console.error(`❌ Source logo not found: ${SOURCE_LOGO}`);
    console.error('   Please save the official logo as: public/logo-observantia-source.png');
    process.exit(1);
  }

  try {
    // Main logo (1024x576 or maintaining aspect ratio)
    await sharp(SOURCE_LOGO)
      .resize(1024, 576, { fit: 'contain', background: { r: 30, g: 30, b: 30, alpha: 1 } })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(OUTPUT_FILES.main);
    console.log('✅ Created: logo-observantia.png (1024x576)');

    // Small version for headers
    await sharp(SOURCE_LOGO)
      .resize(400, 180, { fit: 'contain', background: { r: 30, g: 30, b: 30, alpha: 1 } })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(OUTPUT_FILES.small);
    console.log('✅ Created: logo-observantia-sm.png (400x180)');

    // Favicon 16x16
    await sharp(SOURCE_LOGO)
      .resize(16, 16, { fit: 'contain', background: { r: 30, g: 30, b: 30, alpha: 1 } })
      .png()
      .toFile(OUTPUT_FILES.favicon16);
    console.log('✅ Created: favicon-16.png (16x16)');

    // Favicon 32x32
    await sharp(SOURCE_LOGO)
      .resize(32, 32, { fit: 'contain', background: { r: 30, g: 30, b: 30, alpha: 1 } })
      .png()
      .toFile(OUTPUT_FILES.favicon32);
    console.log('✅ Created: favicon-32.png (32x32)');

    // Apple Touch Icon
    await sharp(SOURCE_LOGO)
      .resize(180, 180, { fit: 'contain', background: { r: 30, g: 30, b: 30, alpha: 1 } })
      .png({ quality: 90 })
      .toFile(OUTPUT_FILES.appleTouchIcon);
    console.log('✅ Created: apple-touch-icon.png (180x180)');

    // Open Graph Image
    await sharp(SOURCE_LOGO)
      .resize(1200, 630, { fit: 'contain', background: { r: 30, g: 30, b: 30, alpha: 1 } })
      .png({ quality: 90 })
      .toFile(OUTPUT_FILES.ogImage);
    console.log('✅ Created: og-image.png (1200x630)');

    console.log('\n✨ Logo optimization complete!');
    console.log('\n📝 Next steps:');
    console.log('   1. Create favicon.ico from favicon-16.png and favicon-32.png');
    console.log('   2. Update layout.tsx with new metadata');
    console.log('   3. Test logos across all pages\n');

  } catch (error) {
    console.error('❌ Error during optimization:', error.message);
    process.exit(1);
  }
}

optimizeLogo();
