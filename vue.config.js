//const path = require('path')
module.exports = {
    baseUrl:"/WebForShow-Dota2-Legue/dist/",
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
    },
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
