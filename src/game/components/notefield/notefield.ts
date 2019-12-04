import * as Phaser from 'phaser'
import { NoteFieldColumn } from './notefield-column'
import { ReceptorGraphic } from '../receptor/graphic'
import { assert } from '../../util/assert'
import config from '../../config'
import { Note } from '../note/note'


export class NoteField extends Phaser.GameObjects.Container {
  keys: number
  columns: NoteFieldColumn[]
  notes: Note[]

  constructor(scene: Phaser.Scene, x: number, y: number, keys: number) {
    super(scene, x, y)

    this.columns = []
    this.keys = keys

    for (let i = 0; i < keys; i++) {
      this.columns.push(
        new NoteFieldColumn(
          scene,
          i * config.game.columnWidth + i * config.game.columnSpacing,
          0,
          new ReceptorGraphic(scene, 0, 0)
        )
      )
    }

    this.notes = [
      new Note(scene, 0, 1100, config.assets.note.name),
      new Note(scene, 0, 900, config.assets.note.name),
      new Note(scene, 0, 700, config.assets.note.name),
      new Note(scene, 0, 500, config.assets.note.name)
    ]

    this.notes[0].setSpeed(config.game.scrollSpeed)
    this.notes[0].setDirection(Phaser.Math.Vector2.UP)
    this.notes[0].setAngle(90)
    this.columns[0].addNotes(this.notes[0])

    this.notes[1].setSpeed(config.game.scrollSpeed)
    this.notes[1].setDirection(Phaser.Math.Vector2.UP)
    this.columns[1].addNotes(this.notes[1])

    this.notes[2].setSpeed(config.game.scrollSpeed)
    this.notes[2].setDirection(Phaser.Math.Vector2.UP)
    this.notes[2].setAngle(180)
    this.columns[2].addNotes(this.notes[2])

    this.notes[3].setSpeed(config.game.scrollSpeed)
    this.notes[3].setDirection(Phaser.Math.Vector2.UP)
    this.notes[3].setAngle(270)
    this.columns[3].addNotes(this.notes[3])

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

  update() {
    for (const col of this.columns) {
      col.update()
    }

    for (const note of this.notes) {
      if (note.y < 0) {
        note.y = 1100
      }
    }
  }
}