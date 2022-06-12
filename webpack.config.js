const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|mp3)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

		plugins: [new HtmlWebpackPlugin({
			path: path.resolve(__dirname, './src'),
      title: 'Match Game'
		})],

		devServer: {
			static: {
					directory: path.join(__dirname, 'src'),
			},
			allowedHosts: 'auto',
			compress: true,
			port: 9000,
			client: {
				overlay: true,
		},
		open: true,
	},

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
		
};