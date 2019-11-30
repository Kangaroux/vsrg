import * as Phaser from 'phaser'
import { ReceptorGraphic } from './graphic'
import { assert } from '../../util/assert'


export class ReceptorContainer extends Phaser.GameObjects.Container {
  receptors: ReceptorGraphic[]
  pressed: boolean[]

  constructor(scene: Phaser.Scene, x: number, y: number, keyCount: number) {
    assert(keyCount > 0, 'key count must be > 0')

    super(scene, x, y)

    this.receptors = []
    this.pressed = []

    for (let i = 0; i < keyCount; i++) {
      this.pressed.push(false)
      this.receptors.push(new ReceptorGraphic(scene, 128 * i, 0, 0))
    }

    this.add(this.receptors)
  }

  setReceptorAngles(...angles: number[]) {
    assert(
      angles.length > 0 && angles.length <= this.receptors.length,
      'number of angles is out of range'
    )

    for (let i = 0; i < angles.length; i++) {
      this.receptors[i].setAngle(angles[i])
    }
  }

  setPressed(n: number, pressed: boolean) {
    assert(
      n >= 0 && n < this.receptors.length,
      `receptor #${n} is out of range (0-${this.receptors.length})`
    )

    this.pressed[n] = pressed
    this.receptors[n].setPressed(pressed)
  }
}