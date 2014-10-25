var keysPressed=[]; //human play
var penMoves = []; //computer play

//this starts a new game
function newGame() {
  keysPressed = [];
  penMoves = [];
  addMove(3); //this will add three dance moves for first roung roung roung {TEDDY EATING PUMPKIN}
  console.log(penMoves);
};

//Starts first game
newGame(); 

//This randomly generates either U, D, L or R. 
function nextMove() {
   switch(Math.floor(Math.random() * (4 - 0) + 0)) { //max number is exclusive
  case 0:
    return "U";
    break;
  case 1:
    return "D";
    break;
  case 2:
    return "L";
    break;
  case 3:
    return "R";
    break;
  }
};

//This will add the latest dance move to the routine
function addMove(i) {
  for(j = 0; j < i; j++) {
    penMoves.push(nextMove());
  }  
}; 
 
//This checks that you have entered the right number of moves and checks answers.
function verifyKey() {
  var acounter = keysPressed.length-1

  console.log(keysPressed.length);
  console.log(penMoves.length);
  if(keysPressed[acounter]!==penMoves[acounter] || keysPressed.length == penMoves.length) {
    checkAccuracy();
  }

};


//This will match your dance moves with the routine
function listenKeys() {
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        // alert("left");
        keysPressed.push("L");
        verifyKey();
      break;
  
      case 38: // Up
        // alert("up");
        keysPressed.push("U");
        verifyKey();
      break;
  
      case 39: // Right
        // alert("right");
        keysPressed.push("R");
        verifyKey();
      break;
  
      case 40: // Down
        // alert("down");
        keysPressed.push("D");
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



