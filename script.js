// Initialize game variables
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Get game board elements and reset button
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("resetButton");

// Add event listeners to game board cells
cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    // Check if cell is empty and game is not over
    if (gameBoard[cell.id.charAt(5)] === "" && !gameOver()) {
      // Update game board array and cell text
      gameBoard[cell.id.charAt(5)] = currentPlayer;
      cell.textContent = currentPlayer;
      
      // Check for winner or tie game
      if (checkWinner()) {
        document.getElementById("result").textContent = currentPlayer + " wins!";
      } else if (checkTie()) {
        document.getElementById("result").textContent = "Tie game!";
      } else {
        // Switch to next player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

// Add event listener to reset button
resetButton.addEventListener("click", function() {
  // Clear game board array and cell text, reset player
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(function(cell) {
    cell.textContent = "";
  });
  currentPlayer = "X";
  // Clear game result
  document.getElementById("result").textContent = "";
});

// Function to check for a winner
function checkWinner() {
  if (
    (gameBoard[0] === currentPlayer && gameBoard[1] === currentPlayer && gameBoard[2] === currentPlayer) ||
    (gameBoard[3] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[5] === currentPlayer) ||
    (gameBoard[6] === currentPlayer && gameBoard[7] === currentPlayer && gameBoard[8] === currentPlayer) ||
    (gameBoard[0] === currentPlayer && gameBoard[3] === currentPlayer && gameBoard[6] === currentPlayer) ||
    (gameBoard[1] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[7] === currentPlayer) ||
    (gameBoard[2] === currentPlayer && gameBoard[5] === currentPlayer && gameBoard[8] === currentPlayer) ||
    (gameBoard[0] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer) ||
    (gameBoard[2] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[6] === currentPlayer)
  ) {
    return true;
  } else {
    return false;
  }
}

// Function to check for a tie game
function checkTie() {
  if (!gameBoard.includes("")) {
    return true;
  } else {
    return false;
  }
}

// Function to check if game is over
function gameOver() {
  if (checkWinner() || checkTie()) {
    return true;
  } else {
    return false;
  }
}
