// https://webpack.js.org/guides/getting-started/

// Import node path module
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

let isProduction = process.env.NODE_ENV === "production";
// console.log(process.env.NODE_ENV);

let config = {
    // the entry point to the app
    entry: "./src/index.tsx",
    output: {
        // the folder path of the output file 
        path: path.resolve(__dirname, "dist"),
        // the name of the output file 
        filename: "bundle.js"
    },

    // source map for debugging - it is added to the output file (bundle.js in this case)
    devtool: "inline-source-map", // Note: use "source-map" for production

    // the environment - development, production, none. tells webpack what optimizations to use; default is production 
    mode: "development",

    devServer: {
        port: "9500", // the port to run the server on
        static: "./dist", // the folder to serve the files from
        open: true, // opens the browser after server is successfully started
        hot: false, // Note: "hot" must be set to false for "liveReload" to work
        liveReload: true // reloads the page when the files change
    },

    target: "web", // "node" or "web" (web is default)

    resolve: {
        /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */
        //extensions: ['.js', '.json', '.ts', '.tsx'] - TODO: remove this line
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
         })
	],
    module:{
        /** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
         * file inside of a require()/import statement, use the babel-loader to transform it before you 
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
         * being searched"
         */
        rules: [
            {
                test: /\.less$/i,
                use: [
                    { loader: 'style-loader' }, // Injects styles into DOM
                    { loader: 'css-loader' },   // Resolves CSS imports and translates CSS into CommonJS
                    { loader: 'less-loader' }   // Compiles Less to CSS
                ]
            },
            {
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
            { 
				test: /\.(ts|tsx)$/i,
                exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: {
					    configFile: isProduction ? "tsconfig.prod.json" : "tsconfig.json"
					},
				},
			},
            {
				test: /\.(png|jpg|jpeg|gif|pdf)$/,
				type: 'asset/resource',
				generator: {
					filename: (file) => file.endsWith(".pdf") ? "[name].[ext]" : "[hash].[ext]"
				},
			},
            // Fonts and SVGs
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
        ]
    }
}

if(isProduction){
    config.mode = "production";
    config.devServer = undefined;
    config.devtool = "source-map";
    config.watch = false;
    config.output = {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    };
}

module.exports = config;