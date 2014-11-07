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

bgImage.src = "./Images/glacier3.png";


// Penguin Rest image
var restReady = false;
var restImage = new Image();
restImage.onload = function () {
  restReady = true;
};
restImage.src = "./Images/down.png";

// Pengine Down image
var downReady = false;
var downImage = new Image();
downImage.onload = function () {
  downReady = true;
};

downImage.src = "./Images/downdown.png";


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

// Penguin gameOver image
var gameOverReady = false;
var gameOverImage = new Image();
gameOverImage.onload = function () {
  gameOverReady = true;
};
gameOverImage.src = "./Images/fail.png";

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

niceImage.src = "./Images/nice2.png";


// awe, try again
var againReady = false;
var againImage = new Image();
againImage.onload = function () {
  againReady = true;
};

againImage.src = "./Images/again2.png";


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
 
  roboDance(); //this is the automated dance 
  console.log(penMoves);
}




//This randomly generates either U, D, L or R. 
function nextMove() {
   switch(Math.floor(Math.random() * (4 - 0) + 0)) { //max number is exclusive
  case 0:
    return upImage;
    break;
  case 1:
    return downImage;
    break;
  case 2:
    return leftImage;
    break;
  case 3:
    return rightImage;
    break;
  }
}

//This makes sure the next move is differnet from the last
function freshMove(){
  var go = nextMove();
  while (go === penMoves[penMoves.length-1]) { go = nextMove(); }
  return go; 
}

//This will add the latest dance move to the routine
function addMove(i) {

  for(j = 0; j < i; j++) { 
      penMoves.push(freshMove()); 
    }
}

//automated dancing by the penguin
penDance = function(direction) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(direction, penguin.x, penguin.y); 
};


var i = 0; 

function roboDance(){
  setTimeout(function() {
      (i >= Number(penMoves.length )) ? (i = 0) : (i = i) ;
    penDance(penMoves[i]);
    i++;
    if(i < penMoves.length) {
      roboDance();
    }  
    else{i++;}
  }, 500)
}; 



//This checks that you have entered the right number of moves and checks answers.
function verifyKey() {
  var acounter = keysPressed.length-1;

  if(keysPressed[acounter]!==penMoves[acounter] || keysPressed.length == penMoves.length) {
    checkAccuracy();
  }
}

var firstGame = true; 

//This will match your dance moves with the routine
function listenKeys() {
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 13: // Enter Key
        firstGame ? (penDance(restImage), penDance(restImage), newGame(), (firstGame = false)) : roboDance() ;
      break;
      case 37: // Left
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(leftImage, penguin.x, penguin.y);
        keysPressed.push(leftImage);
        verifyKey();
      break;
      case 38: // Up
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(upImage, penguin.x, penguin.y);
        keysPressed.push(upImage);
        verifyKey();
      break;
      case 39: // Right
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(rightImage, penguin.x, penguin.y);
        keysPressed.push(rightImage);
        verifyKey();
      break;
      case 40: // Down
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(downImage, penguin.x, penguin.y);
        keysPressed.push(downImage);
        verifyKey();
      break;
      
    }
  }, false);
}


//stops arrow keys shifting the browser window
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

listenKeys(); //Starts listening


//This compares you dance moves with the routine and either moves you to next round or restarts game.
function checkAccuracy() {
  for(a=0;a<penMoves.length;a++) {

    //Wrong routine
    if (keysPressed[a]!==penMoves[a]) {
      // failure = 1;
      
      // ctx.drawImage(againImage, 60, 10);

      var h3 = dance.getElementsByTagName("h3");
      dance.removeChild(h3[0]);

      penDance(gameOverImage);
      ctx.drawImage(againImage, 60, 10);

      setTimeout ( function(){
        newGame();
      }, 3000);
    }

    // Right routine && stops the #pengwinning showing when right number of keys are pressed
    if (keysPressed[a] === penMoves[a] && (a+1)===penMoves.length )
    {

      ctx.drawImage(niceImage, 60, 10);

      var h3 = dance.getElementsByTagName("h3");
      dance.removeChild(h3[0]);

      setTimeout ( function(){
        keysPressed = [];
        addMove(1);

        var moves = penMoves.join(" ");
        var str = "<h3>" + moves + "</h3>";

        var parser = new DOMParser();
        var parsedHtml = parser.parseFromString(str, "text/html");
        var htmldoc = parsedHtml.childNodes[0];
        allMoves = htmldoc.getElementsByTagName("h3");
        dance.appendChild(allMoves[0]);
        
        roboDance();


      }, 1000);
    } 
  }
}
