module.exports = [
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
    overrideConfig: {
      env: {
        browser: true,
        es6: true,
      },
    },
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
];
