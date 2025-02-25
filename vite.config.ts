import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import fs from 'fs-extra';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    copyBlogImages()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true
            })
        ]
    }
}
}));

// Plugin to copy blog images to public folder
function copyBlogImages() {
  return {
    name: 'copy-blog-images',
    buildStart() {
      const srcDir = path.resolve(__dirname, 'src/content/blog/images');
      const destDir = path.resolve(__dirname, 'public/blog-images');
      
      if (fs.existsSync(srcDir)) {
        fs.copySync(srcDir, destDir, { overwrite: true });
      }
    }
  };
}
