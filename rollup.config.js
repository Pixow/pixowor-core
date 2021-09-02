import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: {
    sourcemap: false,
    file: "dist/index.js",
    format: "umd",
    name: "qingCore",
  },
  plugins: [
    typescript({ sourceMap: true, tsconfig: "./tsconfig.json" }),
    json(),
    resolve(),
    commonjs(),
  ],
  external: ["@angular/core", "events", "rxjs", "electron-re"],
};
