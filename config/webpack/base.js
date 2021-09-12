const path = require('path')
const { webpackConfig, merge } = require("@rails/webpacker");

const jsRoot = path.resolve(__dirname, '../../app/javascript')

module.exports = merge(webpackConfig, {
  resolve: {
    alias: {
      '~': jsRoot,
    },
  },
})
