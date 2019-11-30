import * as Phaser from 'phaser'
import { NoteField } from '../components/notefield/notefield'
import config from '../config'


export class PlayScene extends Phaser.Scene {
  notefield: NoteField
  keys: Record<string, Phaser.Input.Keyboard.Key>

  create() {
    this.notefield = new NoteField(this, 0, 0, config.game.keyCount)

    this.notefield.setX((this.scale.width - this.notefield.getBounds().width) / 2)
    this.notefield.setReceptorAngles(...config.game.receptorRotations)
    this.add.container(0, 0, this.notefield)

    // @ts-ignore
    this.keys = this.input.keyboard.addKeys(config.game.keys.join(','), true)
  }

  preload() {
    this.load.image('arrow', 'assets/arrow.png')
    this.load.spritesheet(
      config.assets.receptor.name,
      config.assets.receptor.path,
      {
        frameHeight: config.assets.receptor.height,
        frameWidth: config.assets.receptor.width
      })
  }

  update() {
    for (let i = 0; i < config.game.keyCount; i++) {
      this.notefield.setPressed(i, this.keys[config.game.keys[i]].isDown)
    }
  }
}