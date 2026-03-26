import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  // 1. BUILD JS/TS
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.json',
        declaration: false  // Types séparés
      })
    ]
  },
  // 2. BUILD CSS (globals.css + inputs.scss)
  {
    input: 'src/styles/globals.css',  // @import inputs.scss
    output: {
      file: 'dist/globals.css'
    },
    plugins: [
      postcss({
        config: { path: './tailwind.config.js' },
        extract: true,
        minimize: true,
        use: ['sass']
      })
    ]
  },
  // 3. TAILWIND CONFIG
  {
    input: 'src/tailwind.config.ts',
    output: {
      file: 'dist/tailwind.config.mjs',
      format: 'esm'
    },
    external: ['tailwindcss', 'tailwindcss-animate'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false
      })
    ]
  },
  // 4. TYPES
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];