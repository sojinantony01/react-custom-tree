import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/lib/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'default',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};

