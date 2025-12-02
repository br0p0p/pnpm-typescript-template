import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
    yaml: true,
  },
  pnpm: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
