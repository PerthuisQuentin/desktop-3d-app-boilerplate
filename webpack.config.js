var Path = require('path');
var Webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let babelOptions = {
	compact: true,
	presets: [
		['es2015', { modules: false }]
	]
};

module.exports = {
	mode: 'development',
	target: 'web',
	entry: './src/entry.ts',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './build'
	},
	module: {
		rules: [
			{ 
				test: /\.ts$/, 
				exclude: [
					/node_modules/,
					/build/
				],
				use: [
					{
						loader: 'babel-loader',
						options: babelOptions
					},
					{
						loader: 'ts-loader'
					}
				]
			},
			{ 
				test: /\.js$/, 
				exclude: [
					/node_modules/,
					/build/
				],
				use: {
					loader: 'babel-loader',
					options: babelOptions
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'three/OrbitControls': Path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js')
		}
	},
	plugins: [
		new BundleAnalyzerPlugin(),
		new Webpack.ProvidePlugin({
			'THREE': 'three'
		}),
	]
};