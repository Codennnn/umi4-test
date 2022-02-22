module.exports = {
  root: true,
  extends: [require.resolve('prefer-code-style/lib/eslint'), 'plugin:tailwindcss/recommended'],
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^@@/'],
      },
    ],
    'import/no-named-as-default': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'public',
    'dist*',
    'yarn*',
    '.umi*',
    '.cache',
    '*.less.d.ts',
    '!.eslintrc.js',
    '!.prettierrc.js',
    '!.stylelintrc.js',
    '!.umirc.ts',
  ],
}
