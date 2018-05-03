var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Htmler = require('html-webpack-plugin');
var poststylus = require('poststylus');

module.exports = {
    context: __dirname,
    entry: {
        bundle222:['./shot/go.js'],
        vendor:['react','react-dom','moment','md5','velocity-react','reselect']
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].js',
        chunkFilename:'[name]-[chunkhash:6].js',
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [['antd', {style:'css'}]]
                }
            },
            { test: /\.css$/,exclude: /^node_modules$/, loader: ExtractTextPlugin.extract("style","css")},
            { test: /\.styl$/, loader: ExtractTextPlugin.extract("style", "css!stylus")},
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url?limit=512&name=images/[name].[ext]'
            }
        ]
    },
    stylus: {
        use: [
            poststylus(['autoprefixer'])
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json','.jsx', '.styl', '.css']
    },
    plugins: [
        new ExtractTextPlugin("styles.css",{allChunks: true}),
        new Htmler({
            template: './shot/src/htmls/index.html',
            filename: 'index.html',
            favicon:  './shot/src/image/favicon.ico',
            hash: false,
            inject: false
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            compress: {warnings: false},
            sourceMap : false,
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}})
    ]
};