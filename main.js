
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
}

function tileLogic(evt) {
	var tileNumber = evt.target.id;
	console.log("You selected a tile! "+ tileNumber);
}