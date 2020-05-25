import { join } from 'path';
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constans';

export default () => {
  return {
    entry: join(SOURCE_DIRECTORY, 'js/index.js'),
    output: {
      path: BUILD_DIRECTORY,
      filename: 'js/[name.js]',
    },
  };
};
