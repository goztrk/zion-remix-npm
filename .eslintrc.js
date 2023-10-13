/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('./packages/zion-eslint-config/internal.js')],
};
