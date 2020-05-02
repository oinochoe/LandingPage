const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new WebpackPwaManifest({
            name: '랜딩페이지',
            short_name: '랜딩',
            description: '리액트로 제작한 랜딩페이지',
            backgrond_color: '#ffffff',
            crossorigin: 'use-credentials', // 인증 사용하겠다.
            theme_color: '#eeeeee',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                },
            ],
        }),
        new GenerateSW({
            include: [/\.html$/, /\.js$/],
        }),
    ],
};
