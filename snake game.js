const playboard = document.querySelector("")
const scoreElement = document.querySelector
const highscoreElement = document.querySelector
const controls = document.querySelector()

let gameOver = false;
let foodX, foodY
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = {};
let setIntervalid;
let score = 0;

// Getting high score from the local storage
let highscore = localStorage-getItem("high score")
highscoreElement.innerText = "High score: s
const uptadeFoodPosition = () => {
    // passing a random 1 -30 value as food
    foodX = Math.floor(Math.random() * 30}
    foodY = Math.floor(Math.random() * 30}
)

const handleGameOver = () => {
    //clearing the timer and reloading the
    clearInterval(setIntervalid);
    alert("Game over! press OK to replay...
        location.reload();
)

const changeDirection = e => {
    //changing velocity value based on key
    if(e.key === "ArrowUp" && velocityY !=
        velocityX = 0;
        velocityY = -1;
) else if(e.key === "ArrowDown" && velocityX)
    velocityX = 0;
    velocityY = 1;
) else if(e.key === "ArrowLeft" && velocityY)
    velocityX = -1;
    velocityY = 0;
) else if(e.key === "ArrowRight" && velocityX)
    velocityX = 1;
    velocityY = 0;

  }
)  

  //calling changeDirection on each key click
  controls.forEach(button => button.addEventbutton)

  const initGame = () => {
    if(gameOver) return handleGameOver();
    let html = <div class="food" style="green">

        // Checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY)
    updatefoodposition();
    snakeBody.push(foodY, foodX); //
    
    
  



    
