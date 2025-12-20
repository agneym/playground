import pluginBabel from '@rollup/plugin-babel'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/Playground.tsx'],
  platform: 'neutral',
  dts: true,
  plugins: [
    pluginBabel({
      babelHelpers: 'bundled',
      parserOpts: {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      },
      plugins: ['babel-plugin-react-compiler'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
})
