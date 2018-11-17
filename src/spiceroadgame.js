

class SpiceRoadGame{
	constructor(){
		this.decks = {
			abilities: new Deck(abilityCards),
			points: new Deck([])
		}
		this.deckArea = {
			abilities: $("#abilityDeck"),
			points: $("#pointsDeck")
		}
		this.displayAreas = {
			abilities: $("#abilityDisplay"),
			points: $("#pointsDisplay")
		}
	}
	populateCards(){
		debugger;
		for( var cardI = 0; cardI < 6; cardI++){
			var dealtCard = this.decks.abilities.dealCard();
			var cardDom = dealtCard.render();
			this.displayAreas.abilities.append(cardDom);
		}
	}
	populateGameBoard(){
		var abilityDeckDom = this.decks.abilities.render();
		var pointsDeckDom = this.decks.points.render();
		this.deckArea.abilities.append(abilityDeckDom);
		this.deckArea.points.append(pointsDeckDom);
	}
}