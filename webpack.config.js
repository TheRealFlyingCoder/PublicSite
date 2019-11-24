const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', 'jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
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