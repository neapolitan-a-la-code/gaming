var keysPressed=[]; //human play
var penMoves = []; //computer play


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

function addMove(i) {
  for(j = 0; j < i; j++) {
    penMoves.push(nextMove());
  }
  
}; 
 

addMove(3); //this will add three dance moves for first roung roung roung 

console.log(penMoves);

//this checks that you have entered the right number of moves and checks answers.
function taylor() {
  console.log(keysPressed.length);
  console.log(penMoves.length);
  if(keysPressed.length == penMoves.length) {
    checkAccuracy();
  }

};

function listenKeys() {
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        // alert("left");
        keysPressed.push("L");
        taylor();
      break;
  
      case 38: // Up
        // alert("up");
        keysPressed.push("U");
        taylor();
      break;
  
      case 39: // Right
        // alert("right");
        keysPressed.push("R");
        taylor();
      break;
  
      case 40: // Down
        // alert("down");
        keysPressed.push("D");
        taylor();
      break;
      
    }
  }, false);
}

listenKeys();
//starts listening



function checkAccuracy() {
  // alert(keysPressed);
  // alert(penMoves);
  for(a=0;a<penMoves.length;a++) {
    if (keysPressed[a]!==penMoves[a]) {
      failure = 1;
      alert("wrong");
      //insert video of penguin being eaten by shamu here
      break;
      }
      
    // you got something wrong
    if ((a+1)===penMoves.length)
    {
      alert("you made it through this round!");
      //go to next round, increase number of moves by 1
      keysPressed = [];
      addMove(1);
      console.log(penMoves);
      break;
    }
    
  }
  
  
}



