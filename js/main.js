class TileObject {
  constructor(i) {
    this.index = i
    this.used = false
    this.value = ""
  }

}



const tile = document.querySelectorAll('.tile')

tile.forEach((x) => x.addEventListener('click', tileClick))




// tile.forEach((x,i) => const objTile = new TileObject(i))









console.table(tile)

const tileArr = Array.from(tile)

console.table(tileArr)




for(let x=0, )
console.log(tile.length)



// )


function tileClick() {
  console.log(`clicked`)
}






// onClick()
// checkUsed()
// currentMarker()
// placeMarker()
// checkWin()
// checkBoardFull()