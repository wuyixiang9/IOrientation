const path = require('path')
const pkg = require('./package.json')
module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: "umd",
    filename: pkg.name + '.js',
    path: path.resolve(__dirname, 'dist')
  }
}