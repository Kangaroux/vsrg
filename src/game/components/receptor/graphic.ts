import * as Phaser from 'phaser'


/**
 * The drawable graphic for a receptor. Has a pressed and released state.
 */
export class ReceptorGraphic extends Phaser.GameObjects.Sprite {
  pressed: boolean

  constructor(scene: Phaser.Scene, x: number, y: number, angle?: number) {
    /** @todo: adding 64 (width / 2) is a shitty hack to make up for not being able to
     * both set the origin to (0, 0) and also rotate the image in-place
     */
    super(scene, x + 64, y + 64, 'receptor_4x1')

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