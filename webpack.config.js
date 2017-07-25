const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const NodeModulePath = path.resolve(__dirname, 'node_modules');
const AppPath = path.resolve(__dirname, 'app');
const BuildPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        app: path.resolve(AppPath, 'scripts/main.jsx')
    },
    output: {
        path: BuildPath,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [NodeModulePath]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: NodeModulePath,
                loader: 'babel-loader',
                options: {
                    presets: [
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-react')
                    ]
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '页面标题',
            filename: 'index.html',
            inject: 'body',
//            favicon: '../public/images/icon.ico',
            hash: true
        }),
    ]
}
