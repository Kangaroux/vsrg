import * as Phaser from 'phaser'
import { ReceptorGraphic } from '../receptor/graphic'
import { Note } from '../note/note'


export class NoteFieldColumn extends Phaser.GameObjects.Container {
  notes: Note[]
  pressed: boolean
  receptor: ReceptorGraphic

  constructor(scene: Phaser.Scene, x: number, y: number, receptor: ReceptorGraphic) {
    super(scene, x, y)

    this.notes = []
    this.pressed = false
    this.receptor = receptor

    this.add(receptor)
  }

  addNotes(notes: Note[] | Note) {
    if (!Array.isArray(notes)) {
      notes = [notes]
    }

    this.notes.push(...notes)
    this.add(notes)
  }

  setPressed(pressed: boolean) {
    this.pressed = pressed
    this.receptor.setPressed(pressed)
  }

  update() {
    for (const n of this.notes) {
      n.update()
    }
  }
}