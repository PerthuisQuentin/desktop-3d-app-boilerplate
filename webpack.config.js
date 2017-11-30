var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let babelOptions = {
	'presets': 'es2015'
};

module.exports = {
	entry: './entry.ts',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
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
		extensions: ['.ts', '.js']
	},
	plugins: [
		new BundleAnalyzerPlugin()
	]
};

