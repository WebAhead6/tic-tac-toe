/*
* Initializes the Tic Tac Toe board and starts the game.
*/
function init() {
    const tictactoe = document.querySelector('tictactoe');
    const board = document.createElement('table');
    for (var i = 0; i < tSize; i++) {
        const boardrow = document.createElement('tr');
        for (var j = 0; j < tSize; j++) {
            const cell = document.createElement('td');
            cell.classList.add("cell");
            cell.style.background = "black";
            boardrow.appendChild(cell);
        }
        board.appendChild(boardrow);
    }

}
