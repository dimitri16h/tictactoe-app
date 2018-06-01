//HTML variables
var numPlayersOptions = document.getElementById("numPlayersOptions")

//Logic Variables
var playerSign = ["X", "O"];
var currentPlayer = 0;

document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		//Initialize buttons
		var tiles = document.getElementsByClassName("tile");
		var startOptions = document.getElementsByClassName("option");

		for (var i=0; i < startOptions.length; i++) {
			startOptions[i].addEventListener("click", optionsLogic);
		}
		for (var i=0; i < tiles.length; i++) {
			tiles[i].addEventListener("click", tileLogic);
		}	
	}
}

function optionsLogic(evt) {
	var option = evt.target.id;
	console.log("You selected an option! " + option);
	numPlayersOptions.style.display = 'none';

}

function tileLogic(evt) {
	var tileNumber = evt.target.id;
	console.log("You selected a tile! "+ tileNumber);
	if (evt.target.innerHTML == "&nbsp;") {
		evt.target.innerHTML = playerSign[currentPlayer];
		if (currentPlayer == 0) {
			currentPlayer = 1
		} else {currentPlayer = 0;}
	}
}

// function chooseNumOfPlayers() {
// 	numPlayersOptions.style.display = 'block';

// }

function gameLoop(){

}
function main() {

}