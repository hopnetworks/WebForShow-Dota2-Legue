//const path = require('path')
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
    },
  },
    output: {
        publicPath: '/WebForShow-Dota2-Legue/dist/',
    },
    // build: {
    //     // Template for index.html
    //     //  index: path.resolve(__dirname, '../dist/index.html'),
    //
    //     // Paths
    //     //assetsRoot: path.resolve(__dirname, '../dist'),
    //       assetsSubDirectory: 'WebForShow-Dota2-Legue/dist/',
    //     assetsPublicPath: './',
    // }
};
