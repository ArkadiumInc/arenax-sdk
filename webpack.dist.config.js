const CopyWebpackPlugin = require('copy-webpack-plugin')
const configuration = require('./buildScripts/arenax/configuration')()
module.exports = {
  entry: './entry/arenax/main.js',
  output: {
    filename: 'arenax/[name].min.js',
    libraryTarget: 'var',
    library: ['__arenax_v1__', configuration.gameConfig.sdkName + 'Game']
  },
  plugins: [
    new CopyWebpackPlugin(
      [{
        from: 'src/resources',
        to: 'arenax/build/resources'
      },
      {
        from: 'arenax.config.json',
        to: 'arenax/phenixcfg.json' // this will be changed to arenax.config.json in later iterations
      }
      ]
    )
  ]
}
