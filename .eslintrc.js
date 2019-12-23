module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'compat'],
  parserOptions:  {
    ecmaVersion:  2020,
    sourceType:  'module',
  },
  ecmaFeatures:  {
    jsx:  true,
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  rules:  {
    "prettier/prettier": ["warn", {
      semi:  true,
      trailingComma:  'all',
      singleQuote:  true,
      printWidth:  80,
      tabWidth:  2,
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "compat/compat": "warn",
  },
};
