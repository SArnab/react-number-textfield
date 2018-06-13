const path = require("path");

module.exports = {
	context: __dirname,
	devtool: "inline-source-map",
	entry: path.resolve(__dirname, "index.ts"),
	output: {
		filename: "react-number-textfield.js",
		path: path.resolve(__dirname, "build"),
		library: "ReactNumberTextfield",
		libraryTarget: "commonjs"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: [/node_modules/, /stories/],
				use: "ts-loader"
			}
		]
	},
	externals: {
		react: "react",
	}
};
