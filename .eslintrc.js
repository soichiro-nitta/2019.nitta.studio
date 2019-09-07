module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: [
    'react',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error'
  }
}
