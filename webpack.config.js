const webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
