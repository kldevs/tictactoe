// Class for TileObject
class TileObject {
  constructor() {
    this.value = ""
  }
  setValue(){
    this.value = currentTurn
  }
  getValue(){
    return this.value
  }

}

// Selects all tiles
const tileAll = document.querySelectorAll('.tile')
// tile.forEach((x) => x.addEventListener('click', tileClick))

// Create objects for every tile
const tile = []
for (let i = 0; i < tileAll.length; i++) {
  tile[i] = new TileObject()
}
resetGame()
function tileClick0() {
  onClick(0)
}
function tileClick1() {
  onClick(1)
}
function tileClick2() {
  onClick(2)
}
function tileClick3() {
  onClick(3)
}
function tileClick4() {
  onClick(4)
}
function tileClick5() {
  onClick(5)
}
function tileClick6() {
  onClick(6)
}
function tileClick7() {
  onClick(7)
}
function tileClick8() {
  onClick(8)
}

function onClick(i) {
  if(tile[i].value === "X" || tile[i].value === "O") {
    console.log('Box taken. Please choose another box.')
  } else {
    console.log(`${currentTurn} clicked tile[${i}]`)
    tile[i].value === currentTurn
    checkWin()
    changeTurn()
  }
}

document.querySelector('#t0').addEventListener('click', tileClick)
document.querySelector('#t1').addEventListener('click', tileClick)
document.querySelector('#t2').addEventListener('click', tileClick)
document.querySelector('#t3').addEventListener('click', tileClick)
document.querySelector('#t4').addEventListener('click', tileClick)
document.querySelector('#t5').addEventListener('click', tileClick)
document.querySelector('#t6').addEventListener('click', tileClick)
document.querySelector('#t7').addEventListener('click', tileClick)
document.querySelector('#t8').addEventListener('click', tileClick)




function checkWin(){
  if (tile[0].value === tile[1].value === tile[2].value || 
      tile[3].value === tile[4].value === tile[5].value || 
      tile[6].value === tile[7].value === tile[8].value || 
      tile[0].value === tile[3].value === tile[6].value || 
      tile[1].value === tile[4].value === tile[7].value || 
      tile[2].value === tile[5].value === tile[8].value || 
      tile[0].value === tile[4].value === tile[8].value || 
      tile[2].value === tile[4].value === tile[6].value){
          console.log(`Player ${currentTurn} wins!`)
      }
}

function printTurn(){
  if (currentTurn === "X"){
      console.log("Player X's turn...")
  }
  if (currentTurn === "O"){
      console.log("Player O's turn...")
  }    
}

function resetGame(){
  currentTurn = 'X'
  tile[0].value = null
  tile[1].value = null
  tile[2].value = null
  tile[3].value = null
  tile[4].value = null
  tile[5].value = null
  tile[6].value = null
  tile[7].value = null
  tile[8].value = null
  console.log('New game started')
}

function changeTurn(){
  currentTurn = (currentTurn === 'X' ? 'O' : 'X')
}



//TODO

// onClick()
// checkUsed()
// setValue()
// checkWin()
// checkBoardFull()