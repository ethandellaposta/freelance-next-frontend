export default [
  {
    ignores: ['.next/', 'node_modules/', 'out/'],
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules: {
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
