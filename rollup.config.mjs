import { defineConfig } from "rollup";

export default defineConfig({
  input: "./src/index.js",
  output: {
    file: "./dist/cjs/index.js",
    format: "commonjs",
  },
});
