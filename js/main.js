// Class for TileObject
class TileObject {
  constructor() {
    this.used = false
    this.value = ""
  }
}

// Create listeners for every tiles
const tile = document.querySelectorAll('.tile')
// tile.forEach((x) => x.addEventListener('click', tileClick))

document.querySelector('#t0').addEventListener('click', tileClick)
document.querySelector('#t1').addEventListener('click', tileClick)
document.querySelector('#t2').addEventListener('click', tileClick)
document.querySelector('#t3').addEventListener('click', tileClick)
document.querySelector('#t4').addEventListener('click', tileClick)
document.querySelector('#t5').addEventListener('click', tileClick)
document.querySelector('#t6').addEventListener('click', tileClick)
document.querySelector('#t7').addEventListener('click', tileClick)
document.querySelector('#t8').addEventListener('click', tileClick)



// Create objects for every tile
const tileArr = []
for(i = 0; i < tile.length; i++) {
  tileArr[i] = new TileObject()
}

function tileClick(i) {
  console.log(`${i} clicked`)
}




//TODO

// onClick()
// checkUsed()
// currentMarker()
// placeMarker()
// checkWin()
// checkBoardFull()