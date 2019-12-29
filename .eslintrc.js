module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    allowImportExportEverywhere: false,
    allowArrowFunctions: true,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      globalReturn: false,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-plusplus': 0,
    'no-confusing-arrow': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-danger': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
