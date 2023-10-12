/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/no-duplicates': ['warn', { 'prefer-inline': true }],
    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@zion/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '#app/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
  overrides: [
    {
      extends: ['@remix-run/eslint-config/jest-testing-library'],
      files: ['app/**/__tests__/**/*', 'app/**/*.{spec,test}.*'],
      rules: {
        'testing-library/no-await-sync-events': 'off',
        'jest-dom/prefer-in-document': 'off',
      },
      // we're using vitest which has a very similar API to jest
      // (so the linting plugins work nicely), but it means we have to explicitly
      // set the jest version.
      settings: {
        jest: {
          version: 28,
        },
      },
    },
  ],
}

module.exports = config
