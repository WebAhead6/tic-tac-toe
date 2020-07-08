var tSize = 3,
   movesArray = [], // change name later
   cellIdInit = 0,
   xTurn = "X",
   oTurn = "O",
   currentTurn = xTurn,
   moveNum = 0; // winner only from move 5+
const winninngCombos = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 4, 8],
   [2, 4, 6],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
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
         cell.style.background = "black";
         cell.style.width = "100px";
         cell.style.height = "100px";
         cell.style.color = "white";
         cell.style.textAlign = "center";
         cell.style.fontSize = "50px";
         cell.setAttribute("id", cellIdInit); // initiate cell with ID number
         cell.addEventListener("click", handleClick, { once: true }); // only fire this event listener once
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
function startNewGame() {}

/*
 * Check if a win or not
 */
function win(clicked) {}
/*
 * Sets clicked square and also updates the turn.
 */
function handleClick(e) {
   // it takes the event as an argument
   const cell = e.target; //target takes cell we clicked, then assign it to cell
   //console.log(currentTurn);
   e.target.textContent = currentTurn;
   movesArray.push(currentTurn);
   console.log(movesArray);
   switchTurns();
   //console.log(cell);
   //Functions:
   // check for win
   // check for draw
   // switch turns
}
// obvious functionality
function switchTurns() {
   if (currentTurn == oTurn) {
      currentTurn = xTurn;
   } else {
      currentTurn = oTurn;
   }
}

init();
