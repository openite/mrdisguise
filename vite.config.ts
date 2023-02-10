import { defineConfig } from "vite"

export default defineConfig({
    build: {
        lib: {
            entry: "src/main.ts",
            fileName: "mrdisguise",
            name: "MrDisguise",
            formats: ["cjs", "umd"]
        },
        outDir: "dist",
        minify: "terser",
    }
})