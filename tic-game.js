var tSize = 3,
  board = [],
  cellIdInit = 0,
  turn = "X";

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
      cell.setAttribute("id", cellIdInit); // initiate cell with ID number
      cell.addEventListener("click", function (event) {
        console.log(event.target.id);
      }); // assign function later
      boardrow.appendChild(cell);
      cellIdInit++;
    }
    board.appendChild(boardrow);
  }
  tictactoe.appendChild(board);
}

/*
 * New game
 */
function startNewGame() {
  document
    .getElementsByClassName("cell")
    .addEventListener("click", displayDate);
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
