/// TTTBoard object
class TTTBoard{
  constructor(){
    this.tile = ["", "", "", "", "", "", "", "", ""]
    this.currentPlayer = "X"
    this.gameEnded = false
    this.gameWinner = ""
  }

  setTile(currentPlayer, i){
    if(this.gameEnded === true){
      console.log(`Game has ended`)
    } else if(this.tile[i] === "X" || this.tile[i] === "O"){
      console.log('Box taken. Please choose another box.')
    } else {
      this.tile[i] = currentPlayer
      this.checkGameEnd()
      this.changePlayer()
    }
  }

  // check winning conditions
  checkGameWin(){
    if (this.tile[0] === this.currentPlayer && this.tile[1] === this.currentPlayer && this.tile[2] === this.currentPlayer || 
        this.tile[3] === this.currentPlayer && this.tile[4] === this.currentPlayer && this.tile[5] === this.currentPlayer || 
        this.tile[6] === this.currentPlayer && this.tile[7] === this.currentPlayer && this.tile[8] === this.currentPlayer || 
        this.tile[0] === this.currentPlayer && this.tile[3] === this.currentPlayer && this.tile[6] === this.currentPlayer || 
        this.tile[1] === this.currentPlayer && this.tile[4] === this.currentPlayer && this.tile[7] === this.currentPlayer || 
        this.tile[2] === this.currentPlayer && this.tile[5] === this.currentPlayer && this.tile[8] === this.currentPlayer || 
        this.tile[0] === this.currentPlayer && this.tile[4] === this.currentPlayer && this.tile[8] === this.currentPlayer || 
        this.tile[2] === this.currentPlayer && this.tile[4] === this.currentPlayer && this.tile[6] === this.currentPlayer){
      this.gameWinner = this.currentPlayer
      return true
    }
  }
  
  // game ends in a tie with no moves left
  checkGameTie(){
    if (this.tile.filter((x) => x === "").length === 0 && !this.checkGameWin()){
      return true
    }
  }

  checkGameEnd(){
    if(this.checkGameWin()){
      this.gameEnded = true
      console.log(`Player ${this.gameWinner} Wins!`)
    } else if(this.checkGameTie()){
      this.gameEnded = true
      console.log(`Tie Game!`)
    }
  }
  // resets all tiles back to "" value
  resetGame(){
    for (let i = 0; i < this.tile.length; i++){
      this.tile[i] = ""  
    }
    this.gameEnded = false
    console.log('New game started')
  }

  // change player turn
  changePlayer(){
    this.currentPlayer = (this.currentPlayer === 'X' ? 'O' : 'X')
  }
}

// Code above will handle logic
// Code below will manipulate DOM

const board = new TTTBoard()

function printWinner(){
  document.querySelector('h2').innerText = `Player ${board.gameWinner} wins!`
}

function printTie(){
  document.querySelector('h2').innerText = `Tie Game!`
}

function printCurrentPlayer(){
  if (board.currentPlayer === "X"){
    document.querySelector('h3').innerText = "Player X's turn"
  }
  if (board.currentPlayer === "O"){
    document.querySelector('h3').innerText = "Player O's turn"
  }
}

function printBoard(){
  for (let i = 0; i < board.tile.length; i++){
    document.querySelector(`#t${i}`).innerText = board.tile[i]
  }
}

function onClick(i) {
  if(board.gameEnded === false){
    board.setTile(board.currentPlayer, i)
    printBoard()
    printCurrentPlayer()
    if(board.gameEnded === true){
      board.gameWinner === "" ? printTie() : printWinner()
    }
  }
}

// for(i = 0; i < board.tile.length; i++){
//   document.querySelector(`#t${i}`).addEventListener('click', onClick(i))
// }

document.querySelector('#t0').addEventListener('click', () => onClick(0))
document.querySelector('#t1').addEventListener('click', () => onClick(1))
document.querySelector('#t2').addEventListener('click', () => onClick(2))
document.querySelector('#t3').addEventListener('click', () => onClick(3))
document.querySelector('#t4').addEventListener('click', () => onClick(4))
document.querySelector('#t5').addEventListener('click', () => onClick(5))
document.querySelector('#t6').addEventListener('click', () => onClick(6))
document.querySelector('#t7').addEventListener('click', () => onClick(7))
document.querySelector('#t8').addEventListener('click', () => onClick(8))