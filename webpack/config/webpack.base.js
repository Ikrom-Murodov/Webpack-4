import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constans';
import merge from 'webpack-merge';
import { join } from 'path';

// Базовые модули
import * as modules from '../modules/base';

// Базовый плагины
import * as plugins from '../plugins/base';

export default () => {
  return merge(
    {
      entry: join(SOURCE_DIRECTORY, 'js/index.js'),
      output: {
        path: BUILD_DIRECTORY,
        filename: 'js/[name].js',
      },
    },
    modules.loadFonts(),
    modules.loadPug(),
    plugins.setupPug()
  );
};
