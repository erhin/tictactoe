
var board = document.getElementById("board");
var divmessage = document.getElementById("message");
var pMessage = document.getElementById("pMessage");
var restart = document.getElementById("restart");
var cells = document.querySelectorAll("[data]");
var move = 0;
var xClass = "x";
var oClass = "o";
var def = 0;
var turnViaClass = xClass;
const winCombs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
startGame();
restart.onclick = function () {
  window.location.reload();
};

function win(turnViaClass) {
  return winCombs.some((val) => {
    return val.every((i) => {
      return cells[i].classList.contains(turnViaClass);
    });
  });
}

function check() {
  if (win(turnViaClass) === true && move <= 9) {
    pMessage.innerHTML = turnViaClass + " won !";
    divmessage.style.display = "block";
    board.style.display = "none";
    return;
  }
}

function draw() {
  if (move === 9 && def === 0) {
    pMessage.innerHTML = "Draw";
    divmessage.style.display = "block";
    board.style.display = "none";
    return;
  }
}

function play() {
  move += 1;
  if (turnViaClass === xClass) {
    turnViaClass = oClass;
    this.classList.add(xClass);
  } else {
    turnViaClass = xClass;
    this.classList.add(oClass);
  }
  check();
  draw();
}

function startGame() {
  cells.forEach(function (cell) {
    cell.classList.remove(xClass);
    cell.classList.remove(oClass);
    cell.addEventListener("click", play, { once: true });
  });
}
