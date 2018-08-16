const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

let nodeEnv = process.env.NODE_ENV || 'develop'
// To force reading .env.staging on dev server
if (process.env.BUILD_TYPE === 'staging') {
  nodeEnv = 'staging'
}
require('dotenv').config({ path: `./configs/.env.${nodeEnv}` })

module.exports = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      }
    )
    return config
  },
}
