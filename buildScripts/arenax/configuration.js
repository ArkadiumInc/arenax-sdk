const arenaxGameConfig = require('./../../arenax.config.json')
var gameConfig = require('./gameConfig')
var arenaXConfig = require('./arenaConfig')
gameConfig.slug = arenaxGameConfig.slug
gameConfig.id = arenaxGameConfig.slug
gameConfig.name = arenaxGameConfig.locales[0].settings.name
gameConfig.description = arenaxGameConfig.locales[0].settings.description
gameConfig.thumbPath = arenaxGameConfig.settings.thumbPath
gameConfig.screenshotPath = arenaxGameConfig.settings.screenshotPath
gameConfig.secondaryThumbPath = arenaxGameConfig.settings.secondaryThumbPath
gameConfig.sdkName = arenaxGameConfig.sdkName
gameConfig.promoThumbPath = arenaxGameConfig.settings.promoThumbPath

arenaXConfig.games[0].slug = arenaxGameConfig.slug

module.exports = function () {
  return {
    gameConfig,
    arenaXConfig
  }
}
