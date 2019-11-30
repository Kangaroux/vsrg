import * as Phaser from 'phaser'
import { ReceptorContainer } from '../components/receptor/container'


export class PlayScene extends Phaser.Scene {
  container: ReceptorContainer
  keys: Record<string, Phaser.Input.Keyboard.Key>

  create() {
    this.container = new ReceptorContainer(this, 0, 16, 4)
    this.container.setReceptorAngles(90, 0, 180, 270)
    this.add.container(0, 0, this.container)
    this.container.setX((this.scale.width - this.container.getBounds().width) / 2)

    // @ts-ignore
    this.keys = this.input.keyboard.addKeys('Z,X,PERIOD,FORWARD_SLASH', true)
  }

  preload() {
    this.load.image('arrow', 'assets/arrow.png')
    this.load.spritesheet(
      'receptor_4x1',
      'assets/receptor_4x1.png',
      {
        frameHeight: 128,
        frameWidth: 128
      })
  }

  update() {
    this.container.setPressed(0, this.keys['Z'].isDown)
    this.container.setPressed(1, this.keys['X'].isDown)
    this.container.setPressed(2, this.keys['PERIOD'].isDown)
    this.container.setPressed(3, this.keys['FORWARD_SLASH'].isDown)
  }
}