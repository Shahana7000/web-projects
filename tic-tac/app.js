const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const xScoreSpan = document.getElementById('x-score');
const oScoreSpan = document.getElementById('o-score');

let currentPlayer = 'X';
let board = Array(9).fill('');
let xScore = 0;
let oScore = 0;

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

resetButton.addEventListener('click', resetBoard);

function handleCellClick(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(`${currentPlayer} wins!`);
      updateScore(currentPlayer);
      resetBoard();
    } else if (board.every(cell => cell !== '')) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];
  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === player)
  );
}

function updateScore(player) {
  if (player === 'X') {
    xScore++;
    xScoreSpan.textContent = xScore;
  } else {
    oScore++;
    oScoreSpan.textContent = oScore;
  }
}

function resetBoard() {
  board = Array(9).fill('');
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}
