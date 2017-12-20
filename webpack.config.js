const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    library: './src/library/index.jsx',
    app: './src/app/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[name].js',
    publicPath: '/dist',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true,
              presets: ['react', 'es2015']
            },
        },
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
