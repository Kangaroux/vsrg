import * as Phaser from 'phaser'


export class Note extends Phaser.GameObjects.Sprite {
  direction: Phaser.Math.Vector2
  speed: number

  setDirection(direction: Phaser.Math.Vector2) {
    this.direction = direction
  }

  setSpeed(speed: number) {
    this.speed = speed
  }

  update() {
    const angle = this.direction.angle()
    this.x += Math.cos(angle) * this.speed * this.scene.game.loop.delta / 1000
    this.y += Math.sin(angle) * this.speed * this.scene.game.loop.delta / 1000
  }
}