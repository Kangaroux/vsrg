import * as Phaser from 'phaser'
import { PlayScene } from './scenes/play'

export class Game {
  config: Phaser.Types.Core.GameConfig
  game: Phaser.Game

  constructor(config: Phaser.Types.Core.GameConfig) {
    this.config = config
    this.config.scene = PlayScene
  }

  start() {
    this.game = new Phaser.Game(this.config)
  }
}
