const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// vue.config.js
module.exports = {
  // 选项...
  runtimeCompiler: true,
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
    // 修复HMR热更新，注意
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none';
      return args;
    });
    // 打包分析
    if (process.env.IS_ANALY) {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static',
        }]);
    }
  }
}