import getBaseConfig from './webpack.base';
import merge from 'webpack-merge';

// Плагины для сборки проекта в режиме production
import * as plugins from '../plugins/prod';

// Модили для сборки проекта в режиме production
import * as modules from '../modules/prod';

export default () => {
  return merge(
    getBaseConfig(),
    {
      mode: 'production',
    },
    plugins.cleanBuildDirectory(),
    plugins.setupCss(),
    modules.loadSassAndScss(),
    modules.loadCss()
  );
};
