const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
 mode: 'development',
 entry: {
  bundle: path.resolve(__dirname, 'src/index.js')
 },
 output: {
   filename: '[name][contenthash].js',
   clean: true,
   path: __dirname + '/dist',
   assetModuleFilename: '[name][ext]'
 },
 devtool: 'source-map',
 devServer: {
  static: {
   directory: path.resolve(__dirname, 'dist'),
  },
  port: 3000,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
 },
 module: {
  rules: [
   {
    test: /\.scss$/,
    use: [
     'style-loader',
     'css-loader',
    ]
   },
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env']
     }
    }
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
   }
  ]
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: 'src/home.html',
   filename: 'index.html',
   title: 'Webpack Demo',
  }),
  new BundleAnalyzerPlugin(),
 ]
}