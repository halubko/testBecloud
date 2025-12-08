import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default defineConfig([
   tseslint.configs.recommended,
   pluginVue.configs["flat/essential"],
   pluginQuery.configs["flat/recommended"],
   { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
   eslintPluginPrettierRecommended,
   eslintConfigPrettier,
   {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: { globals: globals.node },
      rules: {
         "prettier/prettier": "warn",
         "no-console": "warn",
      },
   },
]);
