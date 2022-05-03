// Class for TileObject
class TileObject {
  constructor() {
    this.used = false
    this.value = ""
  }
}

// Create listeners for every tiles
const tile = document.querySelectorAll('.tile')
tile.forEach((x) => x.addEventListener('click', tileClick))

// Create objects for every tile
const tileArr = []
for(i = 0; i < tile.length; i++) {
  tileArr[i] = new TileObject()
}

function tileClick() {
  console.log(`clicked`)
}




//TODO

// onClick()
// checkUsed()
// currentMarker()
// placeMarker()
// checkWin()
// checkBoardFull()