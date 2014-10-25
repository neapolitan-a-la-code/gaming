
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
