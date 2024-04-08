import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["**/node_modules", "**/dist/**", "**/build/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
);

// export default {
//   root: true,
//   extends: ["eslint:recommended"],

//   overrides: [
//     {
//       files: ["**/src/**/*.{js,jsx,ts,tsx}"],
//       env: { node: true },
//       parser: "@typescript-eslint/parser",
//       parserOptions: {
//         tsconfigRootDir: __dirname,
//         project: ["./tsconfig.eslint.json"],
//       },
//       plugins: ["@typescript-eslint"],
//       extends: [
//         "plugin:@typescript-eslint/recommended",
//         "plugin:@typescript-eslint/recommended-requiring-type-checking",
//       ],
//     },
//     {
//       files: ["**/*.{js,ts}"],
//       env: { node: true },
//       parser: null,
//     },
//   ],
// };
