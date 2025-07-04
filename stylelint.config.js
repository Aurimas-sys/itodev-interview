/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    '@stylistic/stylelint-config',
    'stylelint-config-idiomatic-order',
  ],
  plugins: [
    'stylelint-use-logical-spec',
    '@stylistic/stylelint-plugin',
  ],
  overrides: [
    {
      files: ['**/*.scss', '**/*.css', '**/*.module.scss', '**/*.module.css'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    '@stylistic/max-line-length': [
      220,
      {
        ignore: 'comments',
      },
    ],
    '@stylistic/indentation': 2,
    'liberty/use-logical-spec': true,
    'selector-class-pattern': null,
    'color-function-notation': null,
    'annotation-no-unknown': [
      true,
      {
        ignoreAnnotations: ['default'],
      },
    ],
    'media-feature-range-notation': null,
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'],
    }],
    'unit-allowed-list': [
      ['fr', 'rem', 'em', '%', 's', 'deg', 'turn', 'dvh', 'ms', 'vw'],
      {
        ignoreProperties: {
          px: ['box-shadow', '/^border/', 'letter-spacing', 'outline'],
        },
      },
    ],
  },
}
