import js from "@eslint/js";
import globals from "globals";
import daStyle from "eslint-config-dicodingacademy";

export default [
  daStyle,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs",
    },
    rules: js.configs.recommended.rules,
  },
];
