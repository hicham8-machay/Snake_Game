/*const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
let startTime =0;
let elapsedTime =0;
let currentTime =0;
let paused = true;
let intervalId;
let hrs =0;
let mins = 0;
let secs =0;
startBtn.addEventListener("click" , ()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime , 75);
    }
});
pauseBtn.addEventListener("click" , ()=>{
    if(!paused){
        paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click" , ()=>{
    paused = true;
    clearInterval(intervalId);
     startTime =0;
 elapsedTime =0;
 currentTime =0;
hrs =0;
 mins = 0; secs =0;
timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime/1000) % 60);
    mins = Math.floor((elapsedTime/(1000*60)) % 60);
    hrs = Math.floor((elapsedTime/(1000*60*60)) % 60);
secs = pad(secs);
mins = pad(mins);
hrs = pad(hrs);
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
return (("0") + unit).length>2 ? unit : "0" + unit ;
    }

<div id="timeContainer">
  <div id="timeDisplay">00:00:00</div>
  <button id="startBtn" class="timerBtn">Start</button>
  <button id="pauseBtn" class="timerBtn">Pause</button>
  <button id="resetBtn" class="timerBtn">Reset</button>
</div> 
}*/


/*
const playerText= document.querySelector("#playerText");
const computerText= document.querySelector("#computerText");
const resultText= document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player ;
let computer ;
let result ;
choiceBtns.forEach(button => button.addEventListener("click" , ()=> {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
} ));
function computerTurn(){
    const randNum = Math.floor(Math.random()*3) + 1;
    switch(randNum){
        case 1 :
            computer = "ROCK";
            break;
            case 2 :
            computer = "PAPER";
            break;
            case 3 :
            computer = "SCISSORS";
            break;
    }
}
function checkWinner() {
    if(player == computer){
        return "Draw!";
    }
    else if (computer == "ROCK"){
       return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
     }
     else if (computer == "SCISSORS"){
        return (player == "PAPER") ? "YOU LOSE" : "YOU WIN!";
     }
}
<div id="gameDiv">
  <h1 class="gameText" id="playerText">Player :</h1>
  <h1 class="gameText" id="computerText">Computer :</h1>
  <h1 class="gameText" id="resultText">Result :</h1>
  <button class="choiceBtn">ROCK</button>
  <button class="choiceBtn">PAPER</button>
  <button class="choiceBtn">SCISSORS</button>
*/

/*
tic atc toe
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
let currentPlayer = "X";
let running = false ;
initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click" , cellClicked));
    restartBtn.addEventListener("click" , restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
const cellIndex = this.getAttribute("cellIndex");
if(options[cellIndex] != "" || !running){
    return ;
}
updateCell(this , cellIndex);

checkWinner();
}
function updateCell(cell , index){
options[index] = currentPlayer;
cell.textContent = currentPlayer;
}
function changePlayer(){
currentPlayer = (currentPlayer == "X") ? "O" : "X" ;
statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
let roundWon = false ;
for(let i=0 ; i<winConditions.length ; i++){
const condition = winConditions[i];
const cellA = options[condition[0]];
const cellB = options[condition[1]];
const cellC = options[condition[2]];

if(cellA == "" || cellB == "" || cellC == ""){  
continue;
}

if(cellA == cellB && cellB == cellC){
    roundWon = true ;
    break;
}
}
if(roundWon){
statusText.textContent = `${currentPlayer} wins!`;
running = false ;
}
else if(!options.includes("")){
     statusText.textContent = `Draw!`;
     running = false ;
}
else {
    changePlayer()
}
}
function restartGame (){
currentPlayer = "X";
let options = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
statusText.textContent = `${currentPlayer}'s turn`;
cells.forEach(cell => cell.textContent="");
running = true ;
}
<div id="gameContainer">
  <h1>Tic Tac Toe</h1>
  <div id="cellContainer">
    <div cellIndex="0" class="cell"></div>
    <div cellIndex="1" class="cell"></div>
    <div cellIndex="2" class="cell"></div>
    <div cellIndex="3" class="cell"></div>
    <div cellIndex="4" class="cell"></div>
    <div cellIndex="5" class="cell"></div>
    <div cellIndex="6" class="cell"></div>
    <div cellIndex="7" class="cell"></div>
    <div cellIndex="8" class="cell"></div>
  </div>
  <h2 id="statusText"></h2>
  <button id="restartBtn">Restart</button>
</div>
</div>
*/

//snake

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25 ;
let running = false;
let xMove = unitSize;
let yMove = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize , y:0},
    {x:0, y:0}
];
window.addEventListener("keydown" , changeDirection);
resetBtn.addEventListener("click" , resetGame);
gameStart();
function gameStart(){
    running = true ;
    scoreText.textContent = score ;
    createFood();
    drawFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75);
    }
    else{
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0,0,gameWidth, gameHeight);
};

function createFood(){
    function randomFood(min , max){
const randNum = Math.round((Math.random()*(max-min)+min)/unitSize)*unitSize;
return randNum;
    }
    foodX = randomFood(0 , gameWidth-unitSize);
    foodY = randomFood(0 , gameWidth-unitSize);
};
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX , foodY , unitSize , unitSize);
};
function moveSnake(){
    const head = {x: snake[0].x + xMove,
                  y: snake[0].y + yMove};
                  snake.unshift(head);
                  //if food is eaten
                  if(snake[0].x == foodX && snake[0].y == foodY){
                   score+=1;
                   scoreText.textContent = score;
                   createFood();
                   drawFood();
                }
                else{
                    snake.pop();
                }
                };
                
    
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x , snakePart.y , unitSize , unitSize);
        ctx.strokeRect(snakePart.x , snakePart.y , unitSize , unitSize);

    });
};
function changeDirection(event){
   const keyPressed = event.keyCode;
  const LEFT = 37 ;
  const UP = 38 ;
  const RIGHT = 39 ;
  const DOWN = 40;

  const goingUp = (yMove == -unitSize);
  const goingDown = (yMove == unitSize);
  const goingRight = (xMove == unitSize);
  const goingLeft = (xMove == -unitSize);
  switch(true){
      case(keyPressed==LEFT && !goingRight):
      xMove = -unitSize;
      yMove = 0;
      break;
      case(keyPressed==UP && !goingDown):
      yMove = -unitSize;
      xMove = 0;
      break;
      case(keyPressed==DOWN && !goingUp):
      yMove = unitSize;
      xMove = 0;
      break;
      case(keyPressed==RIGHT && !goingLeft):
      xMove = unitSize;
      yMove = 0;
      break;
  }
};
function checkGameOver(){
     switch(true){
      case (snake[0].x<0):
      running = false;
      break;
      case (snake[0].x>=gameWidth):
      running = false;
      break;
      case (snake[0].y<0):
      running = false;
      break;
      case (snake[0].y>=gameHeight):
      running = false;
      break;
     }
     for(let i=1 ; i<snake.length ; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false ;
        }
     }
};
function displayGameOver(){
ctx.font ="50px MV Boli";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("GAME OVER!", gameWidth/2 , gameHeight/2);
running = false;
};
function resetGame(){
    score = 0;
    xMove = unitSize;
    yMove = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize , y:0},
        {x:0, y:0}
    ];
    gameStart();
};












