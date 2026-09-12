// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Temporary Vercel URL — switch to https://devstudio.ma after buying the domain
  site: 'https://devstudio-ochre.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const url = item.url;
        const pathname = new URL(url).pathname;
        if (pathname === '/' || pathname === '') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (url.includes('/services')) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (url.includes('/villes/dakhla') || url.includes('/villes/el-kelaa')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        if (url.includes('/villes/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        if (url.includes('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        if (url.includes('/contact') || url.includes('/a-propos')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        return { ...item, priority: 0.5, changefreq: 'monthly' };
      },
    }),
  ],
});
