
module.exports = {
  publicPath:  './' ,
  outputDir: '../public/dcs',
  devServer: {
    proxy: {
      '/test': {
        target: process.env.NODE_ENV === 'development' ? '' : '',// 配置自己的服务器地址
        ws: true,
        secure: true,
        changeOrigin: process.env.NODE_ENV !== 'production',
        pathRewritr: {
          '^/test': ''
        }
      }
    }
  }

}
