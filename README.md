# Arenax SDK

- [Arenax SDK](#arenax-sdk)
  - [Intro](#intro)
  - [Quick start](#quick-start)
  - [Project structure](#project-structure)
  - [ArenaX package manifest](#arenax-package-manifest)
  - [ArenaX API](#arenax-api)
    - [From Game to Arena:](#from-game-to-arena)
    - [From Arena to Game](#from-arena-to-game)

## Intro

Arena SDK helps you integrate games into game Arena. You can use it as starting template for you project but this is not necessary. You can just copy necessary parts to your application, this will work as well.

Arena project based on redux, you can use [Redux devtools](http://extension.remotedev.io/) to track communications between Arena and Game

## Quick start

To start project simply run

```bash
npm start
```

it should open the browser on the http://localhost/games/demo page. Once you integrate your game you will see it here

To prepare package for Arena, simply run

```bash
npm run build
```

it will compile and copy all necessary files into 'dist' folder

## Project structure

Entry point for the arena game defined here:

[entry->arenax->main.js](entry/arenax/main.js)

you should place render code of your game here. Arena will use this code to start game. Important part of this file is 'arenax-game-api' module that you can install with

```bash
npm install arenax-game-api --save
```

once you referenced it you will be able to instantiate ArenaXApi that is main comunication bridge between Arena and game

there 'src' folder with necessary assets that you should replace with your own, you can also place your code into this folder

## ArenaX package manifest

To upload game package into arena you should update ArenaX package manifest that is located in [arenax.config.json](arenax.config.json)

```javascript
{
    "preview": "build/resources/assets/screenshot.jpg", //preview for promo
    "main": "main.min.js", // minimized package filename
    "slug": "demo", // navigation slug this will define url path to game: http://localhost:8080/games/demo if you change slug don't forget to update package.json start operation
    "sdkName": "Demo", // namespace for webpack library, at runtime it will be DemoGame
    "settings": {
        "name": "Demo Game", // name of the game visible to user
        "description": "Enjoy demo game", // short description of the games
        "thumbPath": "build/resources/assets/thumbs/thumb2x.jpg", // thumbnail
        "secondaryThumbPath": "build/resources/assets/thumbs/secondary-thumb2x.jpg", // variation of thumbnail
        "screenshotPath": "build/resources/assets/thumbs/screenshot.jpg", // screen shot for main page
        "tags": [
            "card", // search tags
            "relaxing" // search tags
        ]
    },
    //if you game supports localization it could be provided here
    "locales": [
        {
            "name": "fr",
            "settings": {
                "name": "Demo",
                "description": "",
                "tags": [
                    "carte",
                    "relaxation"
                ]
            }
        }
    ]
}
```

## ArenaX API

### From Game to Arena:

- **GAME_START**: Should be dispatched after the user presses Play game button and starts gameplay.
- **CHANGE_SCORE**: Should be dispatched each time score is changed.
- **GAME_END**: Should be dispatched when the game is ready to go to Arena's game end.
- **EVENT_CHANGE**: Should be dispatched each time user makes action - click/tap tile, press buttons etc. 
- **PAUSE_READY**: Should be dispatched when the game is ready to be paused and Arena can show Interstitial Ads. The best place for this is between levels.

**Example:**

```javascript
let arenaXApi = ArenaXApi.getInstance()
arenaXApi.dispatch({type: 'GAME_START', payload: null}) // notify arena that game started
arenaXApi.dispatch({type: 'EVENT_CHANGE', payload: null}) // refresh display ads
arenaXApi.dispatch({type: 'CHANGE_SCORE', payload: 1000}) // submit user score
arenaXApi.dispatch({type: 'GAME_END', payload: null}) // notify arena that game ended
```

### From Arena to Game

- **GAME_PAUSE**: Fires when Ads content is ready and will be played. The game is hidden.
- **GAME_RESUME**: Fires when Ads is finished and the game is shown.


**Example:**

```javascript
let arenaXApi = ArenaXApi.getInstance()
let onGamePause = function(){
  // pause your game
}
let onGameResume = function(){
  // resume your game
}
arenaXApi.addAction('GAME_PAUSE', onGamePause) // notify arena that game started
arenaXApi.addAction('GAME_RESUME', onGameResume) // refresh display ads
```