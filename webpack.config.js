const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	module: {
		rules: [{
				test: /\.jsx?$/,
				exclude: '/node_modules/',
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader"
				}]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {}
				}]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new CopyWebpackPlugin([
			'manifest.json',
			{
				from: './public/images',
				to: 'images'
			},
			{
				from: './public/scripts',
				to: 'scripts'
			}/* ,
			{
				from: './public/styles',
				to: 'styles'
			} */
		])
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}