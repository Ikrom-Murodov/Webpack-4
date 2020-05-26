export function loadImages() {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|svg)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
}
