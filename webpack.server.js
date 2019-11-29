const webpack = require('./webpack.common')

webpack.entry = {
  server: './src/server'
}

webpack.target = 'node'

module.exports = webpack