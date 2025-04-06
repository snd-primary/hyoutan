import eslintPluginAstro from 'eslint-plugin-astro'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  globalIgnores(['.config/*']),
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
])
