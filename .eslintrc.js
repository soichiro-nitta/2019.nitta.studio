module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: [
    "plugin:react/recommended",
    'plugin:prettier/recommended',
    'prettier',
    "prettier/react"
  ],
  plugins: [
    'react',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
