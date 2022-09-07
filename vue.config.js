// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// module.exports = {
//   outputDir: '../src/main/resources/static',
//   indexPath: '../static/index.html',
//   devServer: {
//     proxy: 'http://localhost:7777'
//   },
//   chainWebpack: config => {
//     const svgRule = config.module.rule('svg')
//     svgRule.uses.clear()
//     svgRule.use('vue-svg-loader').loader('vue-svg-loader')
//   }
// }

module.exports = {
  devServer: {

    // proxy: {
    //   proxy 요청을 보낼 api 시작 부분
    //   '/api': {
    //     target: 'http://localhost:7777',
    //     changeOrigin: true
    //   }
    // }
    proxy: 'http://localhost:7777'
  }
}
