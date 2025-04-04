/** @type {import('lint-staged').Config} */
module.exports = {
  '*.{js,ts,jsx,tsx,astro}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yml,html,css}': ['prettier --write'],
}
