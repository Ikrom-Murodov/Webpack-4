import { loader } from 'mini-css-extract-plugin';
import cssLoader from '../../helper/css-loader';

export function loadCss() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [loader, cssLoader({ sourceMap: false })],
        },
      ],
    },
  };
}
