import * as Phaser from 'phaser'


const phaser: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600
}

const config = {
  assets: {
    receptor: {
      width: 128,
      height: 128,
      name: 'receptor',
      path: 'assets/receptor_4x1.png'
    }
  },
  game: {
    keys: ['Z', 'X', 'PERIOD', 'FORWARD_SLASH'],
    keyCount: 4,
    receptorRotations: [90, 0, 180, 270],
    scrollSpeed: 500
  },
  phaser
}

export default config