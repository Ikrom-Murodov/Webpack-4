export default function fileLoader({ folderName = '' }) {
  return {
    loader: 'file-loader',
    options: {
      name: `${folderName}/[name].[ext]`,
    },
  };
}
