import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { fileURLToPath } from 'url';
import path from "path";

// naprawa __dirname w ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    base: '',
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "#components": resolve(__dirname, "src/components"),
            "#constants": resolve(__dirname, "src/constants"),
            "#hoc": resolve(__dirname, "src/hoc"),
            "#store": resolve(__dirname, "src/store"),
            "#windows": resolve(__dirname, "src/windows"),
        },
    },
});
