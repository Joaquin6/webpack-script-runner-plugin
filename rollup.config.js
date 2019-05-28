import babel from 'rollup-plugin-babel';

export default {
  input: 'src/webpack-script-runner-plugin.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    })
  ],
};
