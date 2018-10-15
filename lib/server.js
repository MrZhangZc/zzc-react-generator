const webpack = require('webpack')
const WebpackDevSerer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevSerer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: true,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false 
    }
}).listen(8080, 'localhost', function(err){
    if(err){
        console.log(err)
    }
    console.log('成功')
})