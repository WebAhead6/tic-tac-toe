var tSize = 3,
  board = [],
  cellIdInit = 0;

/*
 * Initializes the Tic Tac Toe board and starts the game.
 */
function init() {
  const tictactoe = document.querySelector("#tictactoe");
  const board = document.createElement("table");
  //board.style.textAlign = "center";   -- for later
  for (var i = 0; i < tSize; i++) {
    const boardrow = document.createElement("tr");
    for (var j = 0; j < tSize; j++) {
      const cell = document.createElement("td");
      cell.classList.add("cell");
      cell.style.background = "black";
      cell.style.width = "50px";
      cell.style.height = "50px";
      // maybe we should add id to each cell by having a counter
      boardrow.appendChild(cell);
    }
    board.appendChild(boardrow);
  }
  tictactoe.appendChild(board);
}
/*
 * New game
 */
function startNewGame() {
  document.getElementById("myBtn").addEventListener("click", displayDate);
}

/*
 * Check if a win or not
 */
function win(clicked) {}
/*
 * Sets clicked square and also updates the turn.
 */
function set() {}
init();
