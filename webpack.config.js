const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'cheap-source-map',
  devServer: {
    inline: true
  },
  entry: './entry/arenax/main.js',
  output: {
    publicPath: '/',
    filename: '[name].min.js',
    libraryTarget: 'var',
    library: ['__arenax_v1__', 'DemoGame']
  },
  plugins: [
    new CopyWebpackPlugin(
      [{
        from: 'arenax.config.json',
        to: 'phenixcfg.json'
      }]
    )
  ]
}
