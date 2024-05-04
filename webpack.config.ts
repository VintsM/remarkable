import * as webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssoWebpackPlugin from 'csso-webpack-plugin';
import 'webpack-dev-server';

const getConfig = (env, argv): webpack.Configuration => ({
    entry: './src/index.tsx',
    output: {
        publicPath: argv.mode === 'development' ? '/' : '/remarkable/',
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(
                                    __dirname,
                                    'src/styles/resources/index.scss'
                                ),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, 'src/assets/icons'),
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: { icon: true, svgo: false },
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|mp4|webm)$/,
                exclude: path.resolve(__dirname, 'src/assets/icons'),
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {
            '@src': path.resolve(__dirname, 'src/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/assets/favicon.svg',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CssoWebpackPlugin(),
    ],
    devServer: {
        open: false,
        historyApiFallback: true,
        compress: true,
        port: 3000,
    },
});

export default getConfig;
