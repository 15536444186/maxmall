module.exports = {
  configureWebpack: {
    resolve: { //路径相关问题
      alias: {   //别名
        'assets': '@assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        // 'router': '@/assets',  //都可以用this.$router来配置，所以不需要配置了
      }
    }
  }
}