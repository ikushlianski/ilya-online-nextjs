module.exports =  {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends:  [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'import'],
  parserOptions:  {
    ecmaVersion:  2020,
    sourceType:  'module',
  },
  settings:  {
    react:  {
      version: 'detect',
    },
  },
  rules:  {
    "prettier/prettier": ["warn", {
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 80,
      tabWidth: 2,
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "import/order": ["warn", {
      "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index"],
      "newlines-between": "always-and-inside-groups"
    }],
    "newline-before-return": "warn",
  },
};
