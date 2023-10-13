/** @type {import('eslint').Linter.Config} */
var config = {
  extends: [require.resolve('./index.js'), 'plugin:markdown/recommended'],
  plugins: ['markdown'],
  env: {
    node: true,
  },
};
module.exports = config;
