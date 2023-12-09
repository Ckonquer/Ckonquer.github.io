import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// import vercel from "@astrojs/vercel/serverless";
//
// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        // "https://gianmarco.xyz/sitemap-index.xml",
        // "https://gianmarco.xyz/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({
      injectReset: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  // output: "server",
  // adapter: vercel(),
});

