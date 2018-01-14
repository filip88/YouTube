const webpack = require('webpack'),
			path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, ''),
        query: {
          presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-0'].map(require.resolve)
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('./src', 'index.html'),
    }),
  ]
}
