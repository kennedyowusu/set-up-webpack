import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const entry = {
 bundle: resolve(__dirname, 'src/index.js')
};
export const output = {
 filename: '[name][contenthash].js',
 clean: true,
 path: __dirname + '/dist',
 assetModuleFilename: '[name][ext]'
};
export const devtool = 'source-map';
export const devServer = {
 static: {
  directory: resolve(__dirname, 'dist'),
 },
 port: 3000,
 open: true,
 hot: true,
 compress: true,
 historyApiFallback: true,
};
export const module = {
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
  },
  {
   test: /\.(png|svg|jpg|jpeg|gif)$/i,
   type: 'asset/resource',
  }
 ]
};
export const plugins = [
 new HtmlWebpackPlugin({
  template: 'src/home.html',
  filename: 'index.html',
  title: 'Webpack Setup',
 }),
];