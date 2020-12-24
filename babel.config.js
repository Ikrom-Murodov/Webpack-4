module.exports = {
  presets: [
    [
      '@babel/env',
      {
        corejs: '3.0.0',
        debug: false,
        loose: true,
        spec: false,
        useBuiltIns: 'usage',
        targets: {
          node: 'current',
        },
      },
    ],
    ['@babel/preset-typescript'],
  ],
};
