var cells = document.querySelectorAll(".row > div");
var resultHeader = document.getElementById("results");

var topLeft = cells[0];
var topMid = cells[1];
var topRight = cells[2]
var midLeft = cells[3];
var midMid = cells[4];
var midRight = cells[5];
var botLeft = cells[6];
var botMid = cells[7];
var botRight = cells[8];

var clickCounter;
var gameLogicO; 
var gameLogicX;

startGame();

function startGame() {
    resultHeader.innerText = "";
    for (let j = 0; j < cells.length; j++) {
        cells[j].textContent = "";
        cells[j].removeEventListener("click", startGame);
    }
    cellListener();
    gameLogicO = false;
    gameLogicX = false;
    clickCounter = 0;
};

function cellListener () {
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
  }
};

function xoSwitch () {
 var switcher = (clickCounter % 2 == 0) ? "X" : "O";
 return switcher;
};

function cellClicked(){
    var clickTarget = event.target;
    clickTarget.textContent = xoSwitch();
    clickTarget.removeEventListener("click", cellClicked);
    clickCounter++;
    checkWinner();
    announceWinner();
};


function checkWinner() {
    if (botLeft.textContent == "X" && botMid.textContent == "X" && botRight.textContent == "X") {
        gameLogicX = true;
    } else if (midLeft.textContent == "X" && midMid.textContent == "X" && midRight.textContent == "X") {
        gameLogicX = true;
    } else if (topLeft.textContent == "X" && topMid.textContent == "X" && topRight.textContent == "X") {
        gameLogicX = true;
    } else if (topLeft.textContent == "X" && midLeft.textContent == "X" && botLeft.textContent == "X") {
        gameLogicX = true;
    } else if (topMid.textContent == "X" && midMid.textContent == "X" && botMid.textContent == "X") {
        gameLogicX = true;
    } else if (topRight.textContent == "X" && midRight.textContent == "X" && botRight.textContent == "X") {
        gameLogicX = true;
    } else if (topLeft.textContent == "X" && midMid.textContent == "X" && botRight.textContent == "X") {
        gameLogicX = true;
    } else if (topRight.textContent == "X" && midMid.textContent == "X" && botLeft.textContent == "X") {
        gameLogicX = true;
    } else if (botLeft.textContent == "O" && botMid.textContent == "O" && botRight.textContent == "O") {
        gameLogicO = true;
    } else if (midLeft.textContent == "O" && midMid.textContent == "O" && midRight.textContent == "O") {
        gameLogicO = true;
    } else if (topLeft.textContent == "O" && topMid.textContent == "O" && topRight.textContent == "O") {
        gameLogicO = true;
    } else if (topLeft.textContent == "O" && midLeft.textContent == "O" && botLeft.textContent == "O") {
        gameLogicO = true;
    } else if (topMid.textContent == "O" && midMid.textContent == "O" && botMid.textContent == "O") {
        gameLogicO = true;
    } else if (topRight.textContent == "O" && midRight.textContent == "O" && botRight.textContent == "O") {
        gameLogicO = true;
    } else if (topLeft.textContent == "O" && midMid.textContent == "O" && botRight.textContent == "O") {
        gameLogicO = true;
    } else if (topRight.textContent == "O" && midMid.textContent == "O" && botLeft.textContent == "O") {
        gameLogicO = true;
    } 
};


function announceWinner () {
    if (gameLogicX == true) {
        resultHeader.innerText = "X Wins!";
        gameResetClick();
    } else if (gameLogicO == true) {
        resultHeader.innerText = "O Wins!";
        gameResetClick();
    } else if (clickCounter == 9 && gameLogicX == false && gameLogicO == false) {
        resultHeader.innerText = "It's a draw!";
        gameResetClick();
  }
};

function gameResetClick() {
for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", cellClicked);
    cells[i].addEventListener("click", startGame);
  }
};



