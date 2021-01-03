const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier', 'import'],
  env: {
    jest: true,
    jasmine: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'no-restricted-imports': ['error', '**/*'],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
  ignorePatterns: ['src/**/*.test.js'],
};
