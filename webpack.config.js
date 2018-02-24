const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        bg: path.join(__dirname, 'src/msg/bg.ts'),
        index: path.join(__dirname, 'src/msg/index.ts')
    },
    output: {
        path: path.join(__dirname, 'dist/msg'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(__dirname, 'src/msg/index.html'), to: path.join(__dirname, 'dist/msg/index.html') },
            { from: path.join(__dirname, 'src/msg/green.png'), to: path.join(__dirname, 'dist/msg/green.png') },
            { from: path.join(__dirname, 'src/msg/red.png'), to: path.join(__dirname, 'dist/msg/red.png') },
            { from: path.join(__dirname, 'src/msg/manifest.json'), to: path.join(__dirname, 'dist/msg/manifest.json') }
        ])
    ]
}