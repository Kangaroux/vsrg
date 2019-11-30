import * as Phaser from 'phaser'
import { ReceptorGraphic } from '../receptor/graphic'


export class NoteFieldColumn extends Phaser.GameObjects.Container {
  pressed: boolean
  receptor: ReceptorGraphic

  constructor(scene: Phaser.Scene, x: number, y: number, receptor: ReceptorGraphic) {
    super(scene, x, y)

    this.pressed = false
    this.receptor = receptor

    this.add(receptor)
  }

  setPressed(pressed: boolean) {
    this.pressed = pressed
    this.receptor.setPressed(pressed)
  }
}