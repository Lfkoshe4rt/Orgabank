import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,png,jpg,jpeg,gif,svg,woff,woff2,ttf,eot,otf}",
        ],
      },
      manifest: {
        name: "Orga Bank",
        short_name: "Org-Bank",
        description: "Orga Bank",
        theme_color: "#ffffff",
        icons: [
          {
            src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
