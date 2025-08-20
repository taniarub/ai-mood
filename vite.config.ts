import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: command === 'build' && process.env.SSR ? {
      input: './src/entry-server.tsx',
      output: {
        format: 'cjs'
      }
    } : {
      // For static builds, use main.tsx instead of entry-client.tsx
      input: process.env.SSR ? './src/entry-client.tsx' : './src/main.tsx'
    }
  },
  ssr: {
    noExternal: ['react-router-dom', '@tanstack/react-query']
  }
}));
