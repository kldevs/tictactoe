/// TTTBoard object
class TTTBoard{
  constructor(){
    this.tile = ["", "", "", "", "", "", "", "", ""]
    this.winPattern = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
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
    for(let i of this.winPattern){
      if (this.tile[i[0]] === this.tile[i[1]] && this.tile[i[1]] === this.tile[i[2]] && this.tile[i[2]] === this.currentPlayer){
        this.gameWinner = this.currentPlayer
        return true
      }
    }
  }
  
  // game ends in a tie with no moves left
  checkGameTie(){
    if (this.tile.filter((x) => x === "").length === 0 && !this.checkGameWin()){
      return true
    }
  }

  checkGameEnd(){
    if(this.checkGameWin() || this.checkGameTie()){
      this.gameEnded = true
      return true
    }
  }

  // resets properties to initial values
  resetGame(){
    this.tile = this.tile.fill("", 0)
    this.gameWinner = ""
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

function onLoad(){
  for(let i = 0; i < board.tile.length; i++){
    document.querySelector(`#t${i}`).addEventListener('click', () => onClick(i))
  }
  document.querySelector('#btnReset').addEventListener('click', () => clickReset())
  printCurrentPlayer()
}

function printWinner(){
  document.querySelector('h2').innerText = `Player ${board.gameWinner} wins!`
}

function printTie(){
  document.querySelector('h2').innerText = `Tie Game!`
}

function printCurrentPlayer(){
  document.querySelector('h3').innerText = `Player ${board.currentPlayer}'s turn`
}

function printBoard(){
  for (let i = 0; i < board.tile.length; i++){
    document.querySelector(`#t${i}`).innerText = board.tile[i]
  }
}

function showElement(...item){
  for(let i of item)
    document.querySelector(`${i}`).style.visibility ="visible"
}

function hideElement(...item){
  for(let i of item)
    document.querySelector(`${i}`).style.visibility ="collapse"
}

function clickReset(){
  board.resetGame()
  hideElement("#btnReset", "h2")
  showElement("h3")
  printBoard()
}

function onClick(i) {
  if(board.gameEnded === false){
    board.setTile(board.currentPlayer, i)
    printBoard()
    printCurrentPlayer()
    if(board.gameEnded === true){
      board.gameWinner === "" ? printTie() : printWinner()
      hideElement("h3")
      showElement("h2", "#btnReset")
    }
  }
}

const board = new TTTBoard()
onLoad()