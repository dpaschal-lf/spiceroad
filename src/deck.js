

class Deck{
	constructor( cardDataArray ){
		this.domElement = null;
		this.cards = [];
		for(var cardI = 0; cardI < cardDataArray.length; cardI++){
			var card = this.addCard( cardDataArray[cardI] );
			this.cards.push(card);
		}
	}
	addCard( cardData ){
		var card = new Card( cardData );
		return card;
	}
	dealCard(){
		return this.cards.pop();
	}
	render(){
		this.domElement = $("<div>",{
			'class': 'card cardBack'
		});
		return this.domElement;
	}
}