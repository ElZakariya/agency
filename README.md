# DevStudio — Agence web au Maroc

Site marketing Astro pour **DevStudio** (création de sites web, applications web et mobiles), optimisé SEO local pour **Dakhla**, **El Kelaa des Sraghna**, **Casablanca** et d’autres villes du Maroc.

## Stack

- Astro 5+
- Tailwind CSS 4
- `@astrojs/sitemap` + MDX content collections
- Brand : **Dithered** (awesome-design-skills) — primary `#3B82F6`, secondary `#8B5CF6`, surface white
- Fonts : **Space Grotesk** (display) + **Open Sans** (body) + **IBM Plex Mono** (labels)
- Texture : halftone / dithered dot patterns for shade simulation


## Démarrer

```bash
npm install
npm run dev
```

Build production :

```bash
npm run build
npm run preview
```

## Personnaliser (important)

Éditez **un seul fichier** pour domaine, téléphone, email, WhatsApp, adresse :

[`src/data/site.ts`](src/data/site.ts)

Puis mettez à jour `site` dans [`astro.config.mjs`](astro.config.mjs) et le Sitemap dans [`public/robots.txt`](public/robots.txt) quand vous aurez le vrai domaine.

## Structure

- `/` — Accueil (focus services — pas les pages villes)
- `/services/*` — Sites, apps web, apps mobiles, e-commerce
- `/villes/*` — Pages SEO locales (sitemap / ranking, hors nav marketing)
- `/blog/*` — Articles
- `/contact` — Contact + WhatsApp
- `/a-propos` — À propos

## Logo

- `public/logo.svg` — logo vectoriel
- `public/logo.png` — version raster
- `public/favicon.svg` — favicon

## Après mise en ligne

1. Acheter le domaine et pointer le DNS  
2. Google Search Console + soumettre le sitemap  
3. Google Business Profile (NAP = même infos que `site.ts`)  
4. Lien bio Instagram → https://www.instagram.com/devstudio.ma/
