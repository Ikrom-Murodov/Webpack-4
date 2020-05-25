export function loadSassAndScss() {
  return {
    module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
}
