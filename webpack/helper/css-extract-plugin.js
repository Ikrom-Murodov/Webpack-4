import { loader } from 'mini-css-extract-plugin';

export default function cssExtractPlugin({ publicPath = '' }) {
  return {
    loader,
    options: {
      publicPath,
    },
  };
}
