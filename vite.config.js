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
        short_name: "ORG BK",
        theme_color: "#fff",
        background_color: "#fff",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        description: "Orga Bank",

        icons: [
          {
            src: "/src/assets/images/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/src/assets/images/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/src/assets/images/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/src/assets/images/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/src/assets/images/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/src/assets/images/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/src/assets/images/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/src/assets/images/icons/icon-512x512.png",
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
