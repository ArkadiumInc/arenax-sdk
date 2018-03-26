# Arenax SDK

Arena SDK helps you integrate games into game Arena. You can use it as starting template for you project but this is not necessary. You can just copy necessary parts to your application, this will work as well.

Arena project based on redux, you can use [Redux devtools](http://extension.remotedev.io/) to track communications between Arena and Game

Entry point for the arena game defined here:

[entry->arenax->main.js](entry/arenax/main.js)

you should place render code of your game here. Arena will use this code to start game. Important part of this file is 'arenax-game-api' module that you can install with

```bash
npm install arenax-game-api --save
```

once you referenced it you will be able to instantiate ArenaXApi that is main comunication bridge between Arena and game
