var tSize = 3,
   movesArray = [], // change name later
   cellIdInit = 0,
   xTurn = "X",
   oTurn = "O",
   currentTurn = xTurn,
   board = [],
   cellIdInit = 0,
   tieCounter = 0,
   xidArray = [],
   oidArray = [],
   isWinner = false;

const winComb = [
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
   board.style.marginLeft = "auto";
   board.style.marginRight = "auto";
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

function handleClick(e) {
   // it takes the event as an argument
   if (isWinner) {
      return 1;
   }
   const cell = e.target; //target takes cell we clicked, then assign it to cell
   e.target.textContent = currentTurn;
   if (currentTurn === xTurn) {
      xidArray.push(e.target.id);
   } else if (currentTurn === oTurn) {
      oidArray.push(e.target.id);
   }
   //console.log("x id array = " + xidArray);
   //console.log("o id array = " + oidArray);
   movesArray.push(currentTurn);
   console.log(movesArray);
   switchTurns();
   if (movesArray.length > 4) {
      //checks winner after the 5th move
      checkWinner(e);
   }
}
// obvious functionality
function switchTurns() {
   if (currentTurn == oTurn) {
      currentTurn = xTurn;
   } else {
      currentTurn = oTurn;
   }
}

function checkWinner(event) {
   /*
   winComb = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]]
   */
   // we run throughoutt the array of array of winning combinations
   winComb.forEach(checkConditions);
}

var checkConditions = function (condition) {
   // for each combination
   //
   let cell1 = document.getElementById(condition[0]); // 0
   let cell2 = document.getElementById(condition[1]); // 1
   let cell3 = document.getElementById(condition[2]); // 2
   // let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally

   console.log("condition: " + condition[0]);
   console.log("cell id = " + cell1.id);
   console.log("cell= " + cell1.textContent);
   if (
      cell1.textContent === "X" &&
      cell2.textContent === "X" &&
      cell3.textContent === "X" &&
      movesArray.length < 8
   ) {
      isWinner = true;
      alert("player X win");
   } else if (
      cell1.textContent === "O" &&
      cell2.textContent === "O" &&
      cell3.textContent === "O" &&
      movesArray.length < 8
   ) {
      isWinner = true;
      alert("player O win");
   } else {
      console.log("movesArray: " + movesArray.length);
      if (!isWinner && movesArray.length > 8) {
         isWinner = true;
         alert("tie");
      }
   }
};
init();
