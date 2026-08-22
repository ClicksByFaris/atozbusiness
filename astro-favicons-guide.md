# Astro Favicons Installation & Configuration Guide

`astro-favicons` is a comprehensive integration for the Astro web framework that automates the generation and injection of favicons and PWA assets.

## 1. Installation

You can install the integration using your preferred package manager.

### Automatic Installation (Recommended) for testing
The Astro CLI can automatically handle the installation and basic configuration for you using `pnpm`:

```bash
pnpm dlx astro add astro-favicons
```

### Manual Installation
If you prefer to set it up manually:

**Step A: Install the package**
```bash
pnpm add astro-favicons
```
*(Uses `pnpm` as the primary package manager)*

**Step B: Add to `astro.config.mjs`**
Update your Astro configuration file located in project root:

```javascript
import { defineConfig } from 'astro/config';
import favicons from 'astro-favicons';

export default defineConfig({
  integrations: [favicons()],
});
```

---

## 2. Setup your Source Image

To get started, simply place your high-resolution logo in the `public/` folder.

- **Required File:** `public/favicon.svg` (Recommended format for best quality)
- **Alternative:** You can also use a high-res PNG (e.g., `512x512`).

By default, the integration looks for `/public/favicon.svg` and uses it as the source for all generated icons.

---

## 3. How it Works

Once installed and configured:

1. **Automatic Injection:** The integration will automatically inject the required `<link>` tags (like `manifest.json`, `apple-touch-icon`, etc.) into the `<head>` of all your pages. You don't need to add these manually.
2. **Asset Generation:** During `pnpm build`, it uses `@resvg/resvg-js` (or similar engines) to render your SVG into multiple PNG sizes and an `.ico` file.
3. **PWA Support:** It generates a web app manifest (`manifest.webmanifest`) automatically, making your site "Installable" on mobile devices.

---

## 4. Advanced Configuration (Optional)

You can customize the metadata by passing options to the `favicons()` function:

```javascript
integrations: [
  favicons({
    masterPicture: './public/my-custom-logo.svg', // Change source path
    appName: 'My Awesome App',
    appDescription: 'A description for the PWA manifest',
    background: '#ffffff',
    theme_color: '#000000',
  })
],
```

## 5. Summary of Benefits
- ✅ **No manual tag management:** One integration handles everything.
- ✅ **Perfect Quality:** Uses `resvg-js` for crisp icon rendering.
- ✅ **SEO & UX:** Correctly implements all modern browser requirements.
