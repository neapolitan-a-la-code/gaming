// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";


function nextMove() {
    var text;
   switch(Math.floor(Math.random() * (4 - 0) + 0)) { //max number is exclusive
	case 0:
		text = "U";
		break;
	case 1:
		text = "D";
		break;
	case 2:
		text = "L";
		break;
	case 3:
		text = "R";
		break;

}

    document.getElementById("demo").innerHTML = text;
}
