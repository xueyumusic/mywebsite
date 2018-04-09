var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();


module.exports = {
  mode: 'development',
//  entry: path.resolve(__dirname+'/src/index.js'),
  entry: './src/index',
  output: {
    path: '/Users/snowman/code/work/tmp/testweb3/build',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader:'babel-loader', exclude: /node_modules/, options: { presets: ['es2015','react', 'stage-2']} },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({
          fallback: [{ loader: 'style-loader' }],
          use: [{ loader : "css-loader?modules&importLoaders=1&localIndentName=[name]__[local]__[hash:base64:5]" }],
      })  }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};
