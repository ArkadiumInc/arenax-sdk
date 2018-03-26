const CopyWebpackPlugin = require('copy-webpack-plugin')
const gamesJson = require('./previews/arenax-preview/games.json')
module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    before(app) {
      app.get('/games/', function (req, res) {
        if(req.query.locale)
        {
          res.json(gamesJson);
        }
      });
      app.get('/games/demo', function (req, res) {
          res.sendFile(__dirname + '/previews/arenax-preview/index.html')
      });
    }
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