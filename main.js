//HTML variables
var numPlayersOptions = document.getElementById("numPlayersOptions");
var htmlTiles = document.getElementsByClassName("tile");
var htmlBoard = document.getElementById("board");

//Logic Variables
var playerSign = ["X", "O"];
var currentPlayer = 0;
var board = [];
var gameIsRunning = false;

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
		checkForWin();
		if (currentPlayer == 0) {
			currentPlayer = 1;
		} else {currentPlayer = 0;}
	}
}

function checkForWin() {

	for (var i=0; i<htmlTiles.length; i++){
		board[i] = htmlTiles[i].innerHTML;
	}


	//check all 3 horizontals for a win
	if (board[0] === board[1] && board[0]===board[2] && board[0] != "&nbsp;") {
		alert("We have a winner");
	}
	else if (board[3] === board[4] && board[3]===board[5] && board[3] != "&nbsp;") {
		alert("We have a winner");
	}
	else if (board[6] === board[7] && board[6]===board[8] && board[6] != "&nbsp;") {
		alert("We have a winner");
	}


	//check all 3 verticals for a win
	else if (board[0] === board[3] && board[0]===board[6] && board[0] != "&nbsp;") {
		alert("We have a winner");
	}
	else if (board[1] === board[4] && board[1]===board[7] && board[1] != "&nbsp;") {
		alert("We have a winner");
	}
	else if (board[2] === board[5] && board[2]===board[8] && board[2] != "&nbsp;") {
		alert("We have a winner");
	}


	//check the diagonals for a win
	else if (board[0] === board[4] && board[0]===board[8] && board[0] != "&nbsp;") {
		alert("We have a winner");
	}
	else if (board[2] === board[4] && board[2]===board[6] && board[2] != "&nbsp;") {
		alert("We have a winner");
	}
}

function startGame(){
	gameIsRunning = true;
 	htmlBoard.style.display = "block";
}

function startOptions(){

}

function chooseNumOfPlayers() {
	numPlayersOptions.style.display = 'block';

}