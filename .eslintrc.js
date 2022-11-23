module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      // "plugin:@typescript-eslint/recommended",
      "plugin:solid/typescript",
      "prettier",
      "plugin:storybook/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "solid"],
    rules: {
      "no-unused-vars": ["error", { vars: "local" }],
    },
    ignorePatterns: ["**/*.css", "**/assets/**", "**/*.svg", "**/gql/**"],
  };
  