import config from './config'
import { Game } from './game'


const game = new Game(config.gameConfig)
game.start()

module.exports = game