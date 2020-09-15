const port = process.env.port || process.env.npm_config_port || 8010 // 端口
module.exports = {
  /** 部署应用包时的基本URL*/
  publicPath: './',
  /** 在npm run build 时，生成文件的目录名称（默认dist）*/
  outputDir: 'dist',
  /** 用于放置生成的静态资源（js,css,img,fonts）的*/
  assetsDir: 'static',
  /** 是否开启eslint保存检测，有效值：boolean | 'warning' | 'default' | 'error'*/
  lintOnSave: true,
  /** 浏览器运行端口*/
  devServer: {
    port: port
    /*proxy: 'http://localhost:8000'*/
  }
}
