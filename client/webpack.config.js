var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: "./app/app",
    output: {
        filename: 'build.js',
        path: './build'
    },
    // devtool: "#cheap-module-source-map",
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
            loader: 'url-loader?limit=10000'
        }, {
            test: /\.json/,
            loader: "json-loader"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
        })
    ],
    resolve: {
        modulesDirectories: [
            'node_modules',
            'bower_components'
        ],
        alias: {
            Screen1Component: path.resolve(__dirname,"./app/screen1/screen1.component"),
            Screen2Component: path.resolve(__dirname,"./app/screen2/screen2.component"),
        }

    }
}