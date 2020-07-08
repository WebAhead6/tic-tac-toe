var tSize = 3,
  board = [],
  cellIdInit = 0,
  tieCounter = 0,
  turn = "X";
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
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
      cell.style.background = "violet";
      cell.style.width = "50px";
      cell.style.height = "50px";

      cell.setAttribute("id", cellIdInit); // initiate cell with ID number

      cell.addEventListener("click", function (event) {
        if (event.target.textContent === "") {
          event.target.textContent = turn;

          if (turn === "X") {
            turn = "O";
          } else {
            turn = "X";
          }

          winConditions.forEach(function (condition) {
            let cell1 = document.getElementById(condition[0]);
            let cell2 = document.getElementById(condition[1]);
            let cell3 = document.getElementById(condition[2]);

            console.log(cell1.textContent);
            console.log(cell2.textContent);
            console.log(cell3.textContent);

            if (
              cell1.textContent === "X" &&
              cell2.textContent === "X" &&
              cell3.textContent === "X"
            ) {
              alert("player X win");
            } else if (
              cell1.textContent === "O" &&
              cell2.textContent === "O" &&
              cell3.textContent === "O"
            ) {
              alert("player O win");
            } else {
              tieCounter++;
              if (tieCounter === 72) {
                alert("tie");
              }
            }
          });
        }
      });
      // assign function later

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

// function startNewGame() {
//   document
//     .getElementsByClassName("cell")
//     .addEventListener("click", displayDate);
// }

/*
 * Check if a win or not
 */
function win(clicked) {}
/*
 * Sets clicked square and also updates the turn.
 */
function set() {}
init();
