var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/scripts/script.js",
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ] 
            }
        ]
    }
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         //...
    //     })
    // ]
};