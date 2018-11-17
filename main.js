

$(document).ready( loadGame );

var game = null;
function loadGame(){
	game = new SpiceRoadGame();
	game.populateGameBoard();
	game.populateCards();
}