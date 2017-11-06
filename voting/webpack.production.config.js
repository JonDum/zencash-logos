
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let config = require('./webpack.config.js');

config.devtool = '';

config.output.filename = 'assets/js/entry.[hash].js';
config.output.chunkFilename = 'assets/js/chunk.[chunkhash].js';

config.plugins = [
	new webpack.DefinePlugin({
		DEBUG: false,
		PRODUCTION: true,
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		},
	}),
	new WebpackCleanupPlugin(),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new ExtractTextPlugin({
		filename: 'styles.css',
		allChunks: true
	}),

	new UglifyJSPlugin({
		beautify: false,
		ecma: 7,
		output: {
			comments: false,
		},
		compress: {
			comparisons: false,
			warnings: false,
			screw_ie8: true,
			drop_console: true,
			drop_debugger: true,
			dead_code: true,
			unused: true,
		},
		mangle: true,
	}),

	new HtmlWebpackPlugin({
		template: './src/index.html',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		},
	}),

	// don't include all moment's locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
]

module.exports = config;
