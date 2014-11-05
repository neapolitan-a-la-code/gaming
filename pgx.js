// Create the canvas
var canvas = document.createElement("canvas");
var div = document.getElementById("canvas");
var dance = document.getElementById("directions");

var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 463;
div.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "./Images/glacier.jpg";

// Penguin Down image
var downReady = false;
var downImage = new Image();
downImage.onload = function () {
  downReady = true;
};
downImage.src = "./Images/down.png";

// Penguin Up image
var upReady = false;
var upImage = new Image();
upImage.onload = function () {
  upReady = true;
};
upImage.src = "./Images/up.png";

// Penguin Right image
var rightReady = false;
var rightImage = new Image();
rightImage.onload = function () {
  rightReady = true;
};
rightImage.src = "./Images/right.png";

// Penguin Left image
var leftReady = false;
var leftImage = new Image();
leftImage.onload = function () {
  leftReady = true;
};
leftImage.src = "./Images/left.png";

var penguin = {
  x: 200,
  y: 250
};

// Nice! Next level
var niceReady = false;
var niceImage = new Image();
niceImage.onload = function () {
  niceReady = true;
};
niceImage.src = "./Images/nice.png";

// awe, try again
var againReady = false;
var againImage = new Image();
againImage.onload = function () {
  againReady = true;
};
againImage.src = "./Images/again.png";

var keysPressed=[]; //human play
var penMoves = []; //computer play

//this starts a new game
function newGame() {
  keysPressed = [];
  penMoves = [];
  addMove(3); //this will add three dance moves for first roung roung roung {TEDDY EATING PUMPKIN}

  var moves = penMoves.join(" ");
  var str = "<h3>" + moves + "</h3>";

  var parser = new DOMParser();
  var parsedHtml = parser.parseFromString(str, "text/html");
  var htmldoc = parsedHtml.childNodes[0];
  allMoves = htmldoc.getElementsByTagName("h3");
  dance.appendChild(allMoves[0]);
}

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

  if(keysPressed[acounter]!==penMoves[acounter] || keysPressed.length == penMoves.length) {
    checkAccuracy();
  }
}


//This will match your dance moves with the routine
function listenKeys() {
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 32: // Left
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(downImage, penguin.x, penguin.y);
        newGame();
      break;
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
  for(a=0;a<penMoves.length;a++) {

    //Wrong routine
    if (keysPressed[a]!==penMoves[a]) {
      failure = 1;
      ctx.drawImage(againImage, 60, 10);

      var h3 = dance.getElementsByTagName("h3");
      dance.removeChild(h3[0]);

      setTimeout ( function(){
        newGame();
      }, 1000);
    }

    // Right routine
    if ((a+1)===penMoves.length)
    {
      ctx.drawImage(niceImage, 60, 10);

      var h3 = dance.getElementsByTagName("h3");
      dance.removeChild(h3[0]);

      setTimeout ( function(){
        keysPressed = [];
        addMove(3);

        var moves = penMoves.join(" ");
        var str = "<h3>" + moves + "</h3>";

        var parser = new DOMParser();
        var parsedHtml = parser.parseFromString(str, "text/html");
        var htmldoc = parsedHtml.childNodes[0];
        allMoves = htmldoc.getElementsByTagName("h3");
        dance.appendChild(allMoves[0]);
      }, 1000);
    } 
  }
}
