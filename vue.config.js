module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/justJoke/' : '/',
  devServer: {
    port: 8080,
    open: true
  }
}