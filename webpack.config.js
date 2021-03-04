const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    liveReload: true,
  },
  devtool: 'inline-source-map',
  entry: { app: path.resolve(__dirname, "src", "index.js") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'html-loader',
        }
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].[chunkhash].css',
      filename: '[name].[chunkhash].css',
    }),
    new CleanWebpackPlugin(),
],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config'),
    },
    extensions: ['*','.js', '.jsx'],
  },
};