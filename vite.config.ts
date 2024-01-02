import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@resources", replacement: "/src/resources" },
      { find: "@network", replacement: "/src/network" },
      { find: "@types", replacement: "/src/types" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
});
