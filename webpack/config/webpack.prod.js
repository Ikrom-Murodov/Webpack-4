import getBaseConfig from './webpack.base';
import merge from 'webpack-merge';

export default () => {
  return merge(getBaseConfig(), {
    mode: 'production',
  });
};
