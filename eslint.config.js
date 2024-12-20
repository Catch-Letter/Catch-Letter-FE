import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  {
    ignores: ['node_modules', 'public', 'build', 'dist'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,d.ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      react,
      prettier,
      'react-hooks': reactHooks,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'prettier/prettier': 'error',

      // 컴포넌트 이름 규칙
      'react/jsx-pascal-case': 'error',

      // Props 구조 분해 할당 규칙
      'react/destructuring-assignment': ['error', 'always'],

      // TypeScript 관련 규칙
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // 컴포넌트 정의 방식
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // JSX 관련 규칙
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

      // 접근성 관련 규칙
      'jsx-a11y/alt-text': [
        'error',
        {
          elements: ['img', 'object', 'area', 'input[type="image"]'],
        },
      ],

      // 기타 규칙
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: 'error',
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
      ],
      'no-useless-rename': 'error',
      'object-shorthand': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src', '.'],
        },
      },
    },
  },
]
