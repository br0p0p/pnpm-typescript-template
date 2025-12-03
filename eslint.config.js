import antfu from '@antfu/eslint-config';

export default antfu({
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
    yaml: true,
  },
  stylistic: {
    semi: true,
  },
  pnpm: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});
