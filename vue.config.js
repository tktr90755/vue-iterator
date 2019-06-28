module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-iterator/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}