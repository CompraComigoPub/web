module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // "extends": "plugin:react/recommended",
  extends: "react-app",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    indent: ["warn", 2, { ignoredNodes: ["TemplateLiteral"] }],
    "template-curly-spacing": "off",
    // "indent": ["warn", 2],
    semi: ["error"],
    "no-trailing-spaces": ["error", { ignoreComments: true }],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: true,
        argsIgnorePattern: "(_|event|reject|e|err|error)",
        varsIgnorePattern: "(other|others)",
      },
    ],
  },
};
