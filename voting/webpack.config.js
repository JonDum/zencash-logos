
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: [
		'react-hot-loader/patch',
		'./src/main.js',
	],

	output: {
		publicPath: '/',
		path: path.join(__dirname, 'build'),
		filename: 'assets/js/entry.js',
		chunkFilename: 'assets/js/chunk.[name].js',
	},

	resolve: {
		extensions: ['.js', '.styl', '.html'],
		modules: ['src', 'node_modules'],
		alias: {
		}
	},

	module: {
		loaders
	},

	devtool: 'cheap-module-source-map',

	devServer: {
		contentBase: "./public",
		noInfo: true,
		hot: true,
		inline: true,
		historyApiFallback: true,
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			DEBUG: true,
			PRODUCTION: false,
		}),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
  ]
};
