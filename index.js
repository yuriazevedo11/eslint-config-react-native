module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '@react-native-community',
    'plugin:import/errors',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  rules: {
    'no-console': 'error',
    'react-native/no-inline-styles': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          ['internal', 'parent'],
          ['sibling', 'index'],
          'type',
          'object',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['warn'],
      },
    },
  ],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'coverage/', 'android/', 'ios/'],
};
