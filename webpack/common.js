'use strict'

const { join } = require('path')

const paths = {
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
  modules: join(__dirname, '..', 'node_modules')
}

module.exports = {
  entry: join(paths.src, 'index'),

  output: {
    filename: '[name]-[chunkhash].js',
    path: paths.dist
  },

  HtmlPluginConfig: (template) => ({
    title: 'Lista de afazeres e CEP',
    template: join(paths.src, 'html', template)
  }),

  standardLoader: {
    test: /\.js$/,
    include: paths.src,
    enforce: 'pre',
    use: 'standard-loader'
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/i,
    include: [paths.src, join(paths.modules, 'milligram')],
    use: ['style-loader', 'css-loader']
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: paths.src,
      components: join(paths.src, 'components'),
      utils: join(paths.src, 'utils'),
      assets: join(paths.src, 'assets'),
      css: join(paths.src, 'css'),
      reducers: join(paths.src, 'redux-flow', 'reducers')
    }
  }
}
