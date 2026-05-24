import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Hot Asset Copy Hack for Windows local environment
const brainDir = "C:\\Users\\mohan\\.gemini\\antigravity\\brain\\95bf60de-5799-4a0c-80e0-5b5e7428aad5";
const publicDir = path.resolve(__dirname, "./public");

try {
  if (fs.existsSync(brainDir) && fs.existsSync(publicDir)) {
    // Programmatically copy the uploaded picture of Gurubalan GT
    const realFounderTemp = path.join(brainDir, "media__1779600009807.png");
    if (fs.existsSync(realFounderTemp)) {
      fs.copyFileSync(realFounderTemp, path.join(publicDir, "sanjay_founder.png"));
      fs.copyFileSync(realFounderTemp, path.join(brainDir, "sanjay_founder_ceo_gurubalan.png"));
      const oldAiFounder = path.join(brainDir, "sanjay_founder_ceo_1779594860534.png");
      if (fs.existsSync(oldAiFounder)) {
        try { fs.unlinkSync(oldAiFounder); } catch(e) {}
      }
    }

    const files = fs.readdirSync(brainDir);
    files.forEach(file => {
      const srcPath = path.join(brainDir, file);
      if (file.startsWith("sanjay_founder_ceo_")) {
        fs.copyFileSync(srcPath, path.join(publicDir, "sanjay_founder.png"));
      } else if (file.startsWith("kubernetes_devops_")) {
        fs.copyFileSync(srcPath, path.join(publicDir, "kubernetes_devops.png"));
      } else if (file.startsWith("ai_coding_")) {
        fs.copyFileSync(srcPath, path.join(publicDir, "ai_coding.png"));
      } else if (file.startsWith("software_architecture_")) {
        fs.copyFileSync(srcPath, path.join(publicDir, "software_architecture.png"));
      }
    });
    console.log(">>> SUCCESS: Copied all generated assets from Gemini Brain to Public directory!");
  }
} catch (e) {
  console.error(">>> ERROR in asset copying: ", e);
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true,
    },
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
// Trigger asset copy reload 2026-05-24

