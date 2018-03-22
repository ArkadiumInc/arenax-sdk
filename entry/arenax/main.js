var ArenaXApi = require('arenax-game-api')

if (window) {
  window['ArenaXApi'] = ArenaXApi
}

module.exports = {
  game: {
    game: null,
    register: function (observable, options) {
      ArenaXApi.init(observable, options)
    },
    render: function (width, height, elementId) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      // your render code goes here
      // make sure you render into elementId, either you can use initial width and height but make sure your game is dynamic
      // and can scale
    }
  }
}
