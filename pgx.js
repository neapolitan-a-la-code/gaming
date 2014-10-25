var keysPressed=[];
var penguinKeys =["L","R","U","D"];
var failure = 0;

function listenKeys() {
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        alert("left");
        keysPressed.push("L");
      break;
  
      case 38: // Up
        alert("up");
        keysPressed.push("U");
      break;
  
      case 39: // Right
        alert("right");
        keysPressed.push("R");
      break;
  
      case 40: // Down
        alert("down");
        keysPressed.push("D");
      break;
      
       case 13: // Enter
        checkAccuracy();
      break;
    }
  }, false);
}

listenKeys();
//starts listening



function checkAccuracy() {
  alert(keysPressed);
  alert(penguinKeys);
  for(a=0;a<penguinKeys.length;a++) {
    if (keysPressed[a]!==penguinKeys[a]) {
      failure = 1;
      alert("wrong");
      break;
      }
      
    // you got something wrong
    if ((a+1)===penguinKeys.length)
    {
      alert("you made it through this round!");
      //go to next round, increase number of moves by 1
    }
    
  }
  
  
}



