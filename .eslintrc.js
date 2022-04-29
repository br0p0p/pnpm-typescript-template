module.exports = {
  root: true,
  extends: ['eslint:recommended'],

  overrides: [
    {
      files: ['**/src/**/*.{js,jsx,ts,tsx}'],
      env: { node: true },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
    {
      files: ['**/*.{js,ts}'],
      env: { node: true },
      parser: null,
    },
  ],
};
