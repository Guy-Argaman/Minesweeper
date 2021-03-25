'use strict';





var gBoard = createMat(5, 5)
var MINE = '💣';
var gNextId = 1;
gBoard[1][2] = MINE;
gBoard[2][0] = MINE;
// gBoard[2][2].isMine = true;
console.log('gBoard at index 0', gBoard[0])
var gCell = {
    id: gNextId++,
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: false,
    i: i,
    j: j
}
console.log('gBoard itself', gBoard)

function init() {
    // changeBombs()
    // test()
    // setMinesNegsCount(gBoard);
    renderBoard(gBoard);
    // console.log(getEmptyCells());
}


function setMinesNegsCount(board) {

    for (var i = gCell.i - 1; i <= gCell.i + 1; i++) {

        if (i < board.length || i >= board.length) {
            continue;
        }

        for (var j = gCell.j - 1; j <= gCell.j + 1; j++) {
            if ((getEmptyCells() === gCell || gCell.isMine === true)) {
                continue;
            }
            else {
                gCell[i][j].minesAroundCount++;
            }
        }
    }
    // return res;
}


// function changeBombs() {


//     for (var i = 0; i < gBoard.length; i++) {

//         for (var j = 0; j < gBoard.length; j++) {

//             var currCell = gBoard[i][j]

//         }

//     }
//     currCell[0][isMarked] = true;
// }


// function createBombs() {

//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard.length; j++) {

//             gBoard[getRandomInt(0, 5)][getRandomInt(0, 5)] = MINE
//         }
//     }
//     renderBoard();
// }

function cellClicked(elCell, i, j) {

    // var elCell = document.querySelector('.board-cell')

    // var elCell = document.querySelector('.board-cell')
    // var cells = [];
    // var bombsArray = [];
    // elCell.classList.add('mark')
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            var currCell = gBoard[i][j]
            // if (currCell === currCell.isMine) {
            // bombsArray.push(currCell);

            if (currCell === gCell.i && currCell === gCell.j) {
                currCell.isMine = true;
                // cells.push(currCell)
                elCell.style.backgroundColor = 'red'
                elCell.innerHTML = MINE;
                // console.log('cells', cells)
                // }
            }
            console.log(currCell)
        }
        // renderBoard()
    }
    currCell.isMarked = true;
}



function getEmptyCells() {
    // var elCell = document.querySelector('.board-cell')

    var cells = [];
    for (var i = 0; i < gBoard.length; i++) {

        for (var j = 0; j < gBoard[i].length; j++) {

            var cell = gBoard[i][j]
            //  REMINDER: NEW IF STATEMENT, CHECK IF IT WORKS LATER!!
            if (cell.isMine === true) {
                continue;
            } else {
                cells.push(cell)
            }
            // elCell.classList.add('TEST')
        }
    }
    return cells
}

function renderBoard() {

    var strHTML = '<tbody>';

    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr class="table-row">';
        for (var j = 0; j < gBoard[i].length; j++) {
            var cell = gBoard[i][j]
            gBoard[i][j] = gCell;
            var tdId = `cell-${i}-${j}`
            strHTML += `<td id="${tdId}"class="board-cell" onclick="cellClicked()">${cell}</td>`
        }

        strHTML += '</tr>\n'
    }

    // console.log(gBoard[0][1].isMine = true)
    strHTML += '</tbody>'

    var elTable = document.querySelector('.game-board')
    elTable.innerHTML = strHTML
}


function createMat(ROWS, COLS) {

    var mat = [];
    for (var i = 0; i < ROWS; i++) {
        var row = [];
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row);
    }
    // mat.push(gCell)
    return mat
}
