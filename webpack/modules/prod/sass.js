import { loader } from 'mini-css-extract-plugin';
import cssLoader from '../../helper/css-loader';

export function loadSassAndScss() {
  return {
    module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
          exclude: /node_modules/,
          use: [loader, cssLoader({ sourceMap: false }), 'sass-loader'],
        },
      ],
    },
  };
}
