module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'eslint-plugin-react'],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Packages `react` related packages come first, Side effect imports, Internal packages, Anything not matched in another group, Style imports
          ["^react", "^\\u0000", "^(@|components)(/.*|$)", "^", "^.+\\.?(css)$"]
        ]
      }
    ],
    "multiline-ternary": ["error", "always-multiline"],
    "react/react-in-jsx-scope": "off",
    "no-tabs": ["error", {"allowIndentationTabs": true}],
    "max-lines": ["error", 3000],
    "semi": ["error", "always"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "no-multi-spaces": "error",
    "array-bracket-newline": ["error", {"multiline": true}],
    "react/jsx-first-prop-new-line": [2, "multiprop"],
  },
};
