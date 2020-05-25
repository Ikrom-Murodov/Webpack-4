import getBaseConfig from './webpack.base';
import merge from 'webpack-merge';

// Плагины для сборки проекта в режиме production
import * as plugins from '../plugins/prod';

export default () => {
  return merge(
    getBaseConfig(),
    {
      mode: 'production',
    },
    plugins.cleanBuildDirectory()
  );
};
