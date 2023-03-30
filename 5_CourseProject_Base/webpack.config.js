const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.s[ac]ss$/,
                use:  ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index'],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/courses.html',
            chunks: ['courses'],
            filename: 'courses.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src/assets/images/*'),
                    to: path.resolve(__dirname,'dist'),
                    context: 'src'
                }
            ]
        })
    ]
}