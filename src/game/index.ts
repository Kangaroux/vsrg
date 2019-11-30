import config from './config'
import { Game } from './game'


const game = new Game(config.phaser)
game.start()

module.exports = game