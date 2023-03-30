module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/jsx-no-target-blank": "off",
    semi: [1, "always"],
    quotes: "off",
    "eol-last": "off",
    "comma-dangle": "off",
    "react/prop-types": "off",
    "space-before-function-paren": "off"
  }
};
