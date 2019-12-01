const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', 'jsx'],
    alias: {
      Theme: path.join(__dirname, '/src/theme/Theme.js'),
      Assets: path.join(__dirname, '/src/assets'),
    }
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(ico|png)$/i,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(svg)$/i,
        use: 'url-loader',
      }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/templates/index.html',
      favicon: './src/assets/favicon.ico'
    }),
    new ManifestPlugin()
  ]
}