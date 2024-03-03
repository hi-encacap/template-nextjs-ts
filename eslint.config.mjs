/** @type {import('eslint').Linter.FlatConfig[]} */

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import parser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
});

const config = [
  ...compat.extends(
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "next",
    "next/core-web-vitals",
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname,
      },
    },
    rules: {
      "import/prefer-default-export": "off",
      "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    },
  },
  {
    ignores: [".next/*", "node_modules/*", "*.config.*"],
  },
  eslintPluginPrettierRecommended,
];

export default config;
