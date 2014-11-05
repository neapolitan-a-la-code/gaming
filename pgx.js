// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 463;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "images/glacier.jpg";

// Penguin Down image
var downReady = false;
var downImage = new Image();
downImage.onload = function () {
  downReady = true;
};
downImage.src = "images/down.png";


var penguin = {
  x: 200,
  y: 250
};

// Penguin Up image
var upReady = false;
var upImage = new Image();
upImage.onload = function () {
  upReady = true;
};
upImage.src = "images/up.png";

// Penguin Right image
var rightReady = false;
var rightImage = new Image();
rightImage.onload = function () {
  rightReady = true;
};
rightImage.src = "images/right.png";

// Penguin Left image
var leftReady = false;
var leftImage = new Image();
leftImage.onload = function () {
  leftReady = true;
};
leftImage.src = "images/left.png";

var keysPressed=[]; //human play
var penMoves = []; //computer play

//this starts a new game
function newGame() {
  keysPressed = [];
  penMoves = [];
  addMove(3); //this will add three dance moves for first roung roung roung {TEDDY EATING PUMPKIN}
  console.log(penMoves);
}

//Starts first game
newGame(); 

//This randomly generates either U, D, L or R. 
function nextMove() {
   switch(Math.floor(Math.random() * (4 - 0) + 0)) { //max number is exclusive
  case 0:
    return "Up";
    break;
  case 1:
    return "Down";
    break;
  case 2:
    return "Left";
    break;
  case 3:
    return "Right";
    break;
  }
}

//This will add the latest dance move to the routine
function addMove(i) {
  for(j = 0; j < i; j++) {
    penMoves.push(nextMove());
  }
}

//This checks that you have entered the right number of moves and checks answers.
function verifyKey() {
  var acounter = keysPressed.length-1;

  console.log(keysPressed.length);
  console.log(penMoves.length);
  if(keysPressed[acounter]!==penMoves[acounter] || keysPressed.length == penMoves.length) {
    checkAccuracy();
  }
}


//This will match your dance moves with the routine
function listenKeys() {
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(leftImage, penguin.x, penguin.y);
        keysPressed.push("Left");
        verifyKey();
      break;
      case 38: // Up
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(upImage, penguin.x, penguin.y);
        keysPressed.push("Up");
        verifyKey();
      break;
      case 39: // Right
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(rightImage, penguin.x, penguin.y);
        keysPressed.push("Right");
        verifyKey();
      break;
      case 40: // Down
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(downImage, penguin.x, penguin.y);
        keysPressed.push("Down");
        verifyKey();
      break;
      
    }
  }, false);
}

listenKeys(); //Starts listening


//This compares you dance moves with the routine and either moves you to next round or restarts game.
function checkAccuracy() {
  // alert(keysPressed);
  // alert(penMoves);
  for(a=0;a<penMoves.length;a++) {

    //Wrong routine
    if (keysPressed[a]!==penMoves[a]) {
      failure = 1;
      alert("That dance wont fly. Once more?");
      //Insert video of penguin being eaten by shamu here
      newGame();
      break;
      }
      
    // Right routine
    if ((a+1)===penMoves.length)
    {
      alert("nICE #PengWinning");
      //Go to next round, increase number of moves by 1
      keysPressed = [];
      addMove(1);
      console.log(penMoves);
      break;
    } 
  }
}