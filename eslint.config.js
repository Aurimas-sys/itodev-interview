import antfu from '@antfu/eslint-config'
import react from 'eslint-plugin-react'

export default antfu({
  ignores: [
    '**/*.module.scss.d.ts',
  ],
  plugins: {
    react,
  },
  rules: {
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],

    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: false,
      allowTypedFunctionExpressions: false,
      allowHigherOrderFunctions: false,
      allowDirectConstAssertionInArrowFunctions: true,
    }],
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    '@typescript-eslint/explicit-member-accessibility': ['warn', {
      accessibility: 'explicit',
    }],
  },
})
