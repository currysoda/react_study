import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import babelParser from '@babel/eslint-parser';

export default [
  // 무시할 디렉토리 설정
  {
    ignores: ['dist/'],
  },

  // ESLint 기본 추천 설정 적용
  js.configs.recommended,

  // React 플러그인의 추천 설정 적용 (JSX 파싱 및 규칙 포함)
  react.configs.flat.recommended,

  // JSX 파일에 대한 상세 설정
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parser: babelParser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        }
      },
    },
    rules: {
      // React Hooks 플러그인의 추천 규칙 적용
      ...reactHooks.configs.recommended.rules,
      // React Refresh 플러그인 규칙 (Vite 환경에서 권장)
      'react-refresh/only-export-components': 'warn',
      // 기존에 설정하셨던 사용자 규칙
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // React 17+ JSX 변환을 위한 규칙 (선택 사항이지만 권장)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
];