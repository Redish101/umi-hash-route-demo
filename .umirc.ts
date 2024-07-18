import { defineConfig } from "umi";

export default defineConfig({
  base: "/hash-route-demo/",
  history: {
    type: "hash",
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
