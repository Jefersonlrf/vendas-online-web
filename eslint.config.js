import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist", "node_modules"],
  },

  // ✅ configs base (SEM extends)
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
