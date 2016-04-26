'use strict';

const path = require('path');
const webpack = require('webpack');

var config = {
	devtool: 'cheap-module-eval-source-map',
	context: path.resolve(__dirname, 'react'),
	entry: {
		app: './index.jsx'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/
			},
      {
        test: /\.png$/,
        loader: 'url?limit=100000'
      },
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.less$/,
				loaders: ['style', 'css', 'less']
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = config;