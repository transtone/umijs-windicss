import { defineConfig } from 'umi';
import WindiCSS from 'windicss-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  mfsu: {},
  chainWebpack(config) {
    config.plugin('windicss').use(WindiCSS);
  },
});
