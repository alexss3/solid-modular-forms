/// <reference types="vitest" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslint from "vite-plugin-eslint";


export default defineConfig({
  plugins: [
    solidPlugin(), 
    eslint({
      exclude: ["**/node_modules/**"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    setupFiles: "./setupVitest.tsx",
    deps: {
      registerNodeLoader: true,
    },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
