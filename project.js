// Creating first js project TikTakToe
const prompt = require("prompt-sync")() // import the prompt function

function makeMove (turn, board){
    while(true) {
        const row = parseInt(prompt('Enter row: ')) // prompt thr user to enter a valid row
        const col = parseInt(prompt('Enter column: ')) // prompt thr user to enter a valid column
        if(isNaN(row) || row < 1 || row > 3) console.log('Invalid row') //return error if row is out of range or not a number
        if(isNaN(col) || col < 1 || col > 3) console.log('Invalid Column') // retun error if column is out of range or not a number
        else if (board[row - 1][col - 1] != '') console.log('Invalid position') // check if the possition either the row or column is occupied
        else{
            board[row - 1][col- 1] = turn //  input turns from turns from x to 0 
            break
    }
    }
    
}
function printBoard(board){ // a board funtion
    for(let i = 0; i< board.length; i++){ // help loop through each row and each column => in total it runs 3 times
        const row = board[i]
        let rowString = ''
        for(let j=0; j<row.length; j++){ //looping through the colunm in the row => in to tal it runs 9 times
            rowString += row[j]
            if (j !== row.length - 1) rowString += " | "
        }
        console.log(rowString)
        if (i !== board.length -1) console.log('--------') // ensure that the separator is notprinted oon the last line
        

    }
}

const board = [  // this is a multi dimentional array
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
   
]
// board[0][0] => here we can access a single point in the array
// board[0] => returns the whole row
// board[0][0] => retuns the first row and in the first row first column

// makeMove('x', board)
// console.log(board)
// makeMove('0', board)
// console.log(board)

let turn = 'x'
let turnCount = '0' // stating our initial turn value

printBoard(board) // brints the board first to show the user whats in the board at the start
console.log()
while (turnCount < 9) { // ensure that turns are not grater than 9
    makeMove(turn, board)
    printBoard()

    if (turn === 'x') turn = 'o' // help turn and switch from user x to user o alternatively
    else turn = "x"
    turnCount++;
}