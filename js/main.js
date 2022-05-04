// Class for TileObject
class TileObject {
  constructor() {
    this.value = ""
  }
  setValue(currentTurn){
    this.value = currentTurn
  }
}

let currentTurn = 'X'
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
    tile[i].setValue(currentTurn)
    console.table(tile)
    checkGameEnd()
    changeTurn()
    drawBoard()
  }
}

document.querySelector('#t0').addEventListener('click', tileClick0)
document.querySelector('#t1').addEventListener('click', tileClick1)
document.querySelector('#t2').addEventListener('click', tileClick2)
document.querySelector('#t3').addEventListener('click', tileClick3)
document.querySelector('#t4').addEventListener('click', tileClick4)
document.querySelector('#t5').addEventListener('click', tileClick5)
document.querySelector('#t6').addEventListener('click', tileClick6)
document.querySelector('#t7').addEventListener('click', tileClick7)
document.querySelector('#t8').addEventListener('click', tileClick8)

function checkGameEnd(){
  if (tile[0].value === currentTurn && tile[1].value === currentTurn && tile[2].value === currentTurn || 
    tile[3].value === currentTurn && tile[4].value === currentTurn && tile[5].value === currentTurn || 
    tile[6].value === currentTurn && tile[7].value === currentTurn && tile[8].value === currentTurn || 
    tile[0].value === currentTurn && tile[3].value === currentTurn && tile[6].value === currentTurn || 
    tile[1].value === currentTurn && tile[4].value === currentTurn && tile[7].value === currentTurn || 
    tile[2].value === currentTurn && tile[5].value === currentTurn && tile[8].value === currentTurn || 
    tile[0].value === currentTurn && tile[4].value === currentTurn && tile[8].value === currentTurn || 
    tile[2].value === currentTurn && tile[4].value === currentTurn && tile[6].value === currentTurn){
  document.querySelector('h2').innerText = `Player ${currentTurn} wins!`
  resetGame()
  } else if (tile[0].value !== null && 
    tile[1].value !== null && 
    tile[2].value !== null && 
    tile[3].value !== null && 
    tile[4].value !== null && 
    tile[5].value !== null && 
    tile[6].value !== null && 
    tile[7].value !== null && 
    tile[8].value !== null){
  document.querySelector('h2').innerText = `Draw Game!`
  resetGame()
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
  printTurn()
}

function changeTurn(){
  currentTurn = (currentTurn === 'X' ? 'O' : 'X')
  printTurn()
}

function printTurn(){
  if (currentTurn === "X"){
    document.querySelector('h3').innerText = "Player X's turn"
  }
  if (currentTurn === "O"){
    document.querySelector('h3').innerText = "Player O's turn"
  }
}

//draw values to tile id
function drawBoard() {
  for (let i = 0; i < tile.length; i++){
    document.querySelector(`#t${i}`).innerText = tile[i].value
  }
}

//TODO

// onClick()
// checkUsed()
// setValue()
// checkWin()
// checkBoardFull()