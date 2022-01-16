module.exports = {
  // Run ESLint on changes to JavaScript/TypeScript files
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'yarn build-types',
  '*.json': ['prettier --write'],
};
