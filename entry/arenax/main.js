var ArenaXApi = require('arenax-game-api')

window['ArenaXApi'] = ArenaXApi

module.exports = {
  game: {
    game: null,
    register: function (observable, options) {
      let arenaXApi = ArenaXApi.init(observable, options)
      arenaXApi.dispatch({type: 'GAME_REGISTERED', payload: null})
    },
    render: function (width, height, elementId) {
      // Example of arena communication
      let arenaXApi = ArenaXApi.getInstance()
      arenaXApi.dispatch({type: 'GAME_START', payload: null})
      arenaXApi.dispatch({type: 'CHANGE_SCORE', payload: 1000})
      arenaXApi.dispatch({type: 'GAME_END', payload: null})
      // your render code goes here
      // make sure you render into elementId, either you can use initial width and height but make sure your game is dynamic
      // and can scale
    },
    destroy: function () {}
  }
}
