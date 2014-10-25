// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 694;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/glacier.jpg";

var down = {
	x: 400,
	y: 300
}

// Penguin Down image
var downReady = false;
var downImage = new Image();
downImage.onload = function () {
	downReady = true;
};
downImage.src = "images/down.png";

// // Penguin Up image
// var upReady = false;
// var upImage = new Image();
// upImage.onload = function () {
// 	upReady = true;
// };
// upImage.src = "images/up.png";

// // Penguin Right image
// var rightReady = false;
// var rightImage = new Image();
// rightImage.onload = function () {
// 	rightReady = true;
// };
// rightImage.src = "images/right.png";

// // Penguin Left image
// var leftReady = false;
// var leftImage = new Image();
// leftImage.onload = function () {
// 	leftReady = true;
// };
// leftImage.src = "images/left.png";

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		upImage;
	}
	if (40 in keysDown) { // Player holding down
		 downImage;
	}
	if (37 in keysDown) { // Player holding left
		leftImage;
	}
	if (39 in keysDown) { // Player holding right
		rightImage;
	}
};

var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (downReady) {
		ctx.drawImage(downImage, down.x, down.y);
	}

	// if (upReady) {
	// 	ctx.drawImage(upImage, 0, 0);
	// }
	// if (rightReady) {
	// 	ctx.drawImage(rightImage, 0, 0);
	// }
	// if (leftReady) {
	// 	ctx.drawImage(leftImage, 0, 0);
	// }
};

var reset = function () {
	down.x = canvas.width / 2;
	down.y = canvas.width / 2;
};


// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Let's play this game!
var then = Date.now();
reset();
main();




// function nextMove() {
//     var text;
//    switch(Math.floor(Math.random() * (4 - 0) + 0)) { //max number is exclusive
// 	case 0:
// 		text = "U";
// 		break;
// 	case 1:
// 		text = "D";
// 		break;
// 	case 2:
// 		text = "L";
// 		break;
// 	case 3:
// 		text = "R";
// 		break;

// }

//     document.getElementById("demo").innerHTML = text;
// }
