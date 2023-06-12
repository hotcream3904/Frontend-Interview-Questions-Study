const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //폴더나 파일을 불러와서 사용하는 역할

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    open: true,
    port: 'auto',
  },
  devtool: 'source-map',
  mode: 'production',
};