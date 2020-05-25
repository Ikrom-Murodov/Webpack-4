import getBaseConfig from './webpack.base';
import merge from 'webpack-merge';

export default () => {
  return merge(getBaseConfig(), {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
  });
};
