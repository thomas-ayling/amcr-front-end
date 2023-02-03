// Roolup plugins
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify-es'
import rawsvg from 'rollup-plugin-rawsvg'

export default {
  input: 'dist/demo.js',
  output: {
    file: 'dist/demo-bundle.js',
    format: 'iife'
  },
  sourcemap: true,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      include: 'node_modules/**'
    }),
    json(),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    rawsvg(),
    uglify()
  ]
}
