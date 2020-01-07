module.exports = {
  chinaWebpack: config => {
    config.plugin('html').tap(args => {
        // 压缩index.html
        args[0].minify = {
          ...args[0].minify,
          removeStyleLinkTypeAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true
        }
        args[0].title = `Lenovo`
        return args
      })
  } 
}