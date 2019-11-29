const webpack = require('./webpack.common')

webpack.entry = {
  game: './src/game'
}

webpack.node = {
  fs: 'empty'
}

module.exports = webpack