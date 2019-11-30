import * as Phaser from 'phaser'
import { NoteFieldColumn } from './notefield-column'
import { ReceptorGraphic } from '../receptor/graphic'
import { assert } from '../../util/assert'
import config from '../../config'


export class NoteField extends Phaser.GameObjects.Container {
  keys: number
  columns: NoteFieldColumn[]

  constructor(scene: Phaser.Scene, x: number, y: number, keys: number) {
    super(scene, x, y)

    this.columns = []
    this.keys = keys

    for (let i = 0; i < keys; i++) {
      this.columns.push(
        new NoteFieldColumn(
          scene,
          i * config.assets.receptor.width,
          0,
          new ReceptorGraphic(scene, 0, 0)
        )
      )
    }

    this.add(this.columns)
  }

  setReceptorAngles(...angles: number[]) {
    assert(
      angles.length > 0 && angles.length <= this.columns.length,
      'number of angles is out of range'
    )

    for (let i = 0; i < angles.length; i++) {
      this.columns[i].receptor.setAngle(angles[i])
    }
  }

  setPressed(n: number, pressed: boolean) {
    assert(
      n >= 0 && n < this.columns.length,
      `receptor #${n} is out of range (0-${this.columns.length})`
    )

    this.columns[n].setPressed(pressed)
  }
}