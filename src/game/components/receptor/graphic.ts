import * as Phaser from 'phaser'
import config from '../../config'


/**
 * The drawable graphic for a receptor. Has a pressed and released state.
 */
export class ReceptorGraphic extends Phaser.GameObjects.Sprite {
  pressed: boolean

  constructor(scene: Phaser.Scene, x: number, y: number, angle?: number) {
    super(scene, x, y, config.assets.receptor.name)

    if (angle !== undefined) {
      this.setAngle(angle)
    }
  }

  setPressed(pressed: boolean) {
    if (pressed === this.pressed) {
      return
    }

    this.pressed = pressed

    if (this.pressed) {
      this.setTintFill()
    } else {
      this.clearTint()
    }
  }
}