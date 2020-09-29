const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
      },
      modules: 'cjs',
    },
  ],
  '@babel/react',
];

const plugins = ['@babel/plugin-transform-async-to-generator', 'styled-components'];

module.exports = { presets, plugins };
