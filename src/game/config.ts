import * as Phaser from 'phaser'


const phaser: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600
}

const config = {
  assets: {
    note: {
      width: 128,
      height: 128,
      name: 'note',
      path: 'assets/arrow.png'
    },
    receptor: {
      width: 128,
      height: 128,
      name: 'receptor',
      path: 'assets/receptor_4x1.png'
    }
  },
  game: {
    columnWidth: 128,
    columnSpacing: 16,
    keys: ['Z', 'X', 'PERIOD', 'FORWARD_SLASH'],
    keyCount: 4,
    receptorRotations: [90, 0, 180, 270],
    scrollSpeed: 1000
  },
  phaser
}

export default config