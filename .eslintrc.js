module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 1,
  },
};

// https://medium.com/ovrsea/setup-a-typescript-project-with-eslint-prettier-and-vs-code-4ce4fcb76509

// module.exports = {
//   root: true,
//   env: {
//     es2021: true,
//   },
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint', 'prettier'],
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'prettier',
//   ],
//   rules: {
//     'no-console': 1,
//     'prettier/prettier': 2,
//   },
// };
