const CopyWebpackPlugin = require('copy-webpack-plugin')
const configuration = require('./buildScripts/arenax/configuration')()
module.exports = {
  devtool: 'inline-source-map',
  // emulating arena apis
  devServer: {
    inline: true,
    before (app) {
      app.get('/dev-api/games/', function (req, res) {
        res.json([configuration.gameConfig])
      })
      app.get('/dev-api/games/' + configuration.gameConfig.slug + '/', function (req, res) {
        res.json(configuration.gameConfig)
      })
      app.get('/dev-api/gamesConfig', function (req, res) {
        res.json(configuration.arenaXConfig)
      })
    }
  },
  // entry point for the game
  entry: './entry/arenax/main.js',
  module: {
    // rules: [
    //   { test: /\.(js|jsx)$/, enforce: 'pre', use: 'eslint-loader' }
    // ]
  },
  output: {
    publicPath: '/',
    filename: '[name].min.js',
    // generating webpack library
    libraryTarget: 'var',
    library: ['__arenax_v1__', configuration.gameConfig.sdkName + 'Game']
  },
  plugins: [
    new CopyWebpackPlugin(
      [{
        from: 'src/resources',
        to: 'build/resources'
      },
      {
        from: 'arenax.config.json',
        to: 'phenixcfg.json' // this will be changed to arenax.config.json in later iterations
      }]
    )
  ]
}
