

class Card{
	constructor( cardData ){
		this.requires = cardData.requires;
		this.yields = cardData.yields;
		this.image = cardData.img;
		this.domElement = null;

		//$("body").append( this.render() );
	}
	render(){
		this.domElement = $("<div>", {
			'class': 'card',
			css: {
				backgroundImage: 'url('+this.image+')'
			}
		})
		var cubeIndicator = $("<div>",{
			'class': 'cubeIndicator'
		});
		var requireCubes = [];
		for(var requireI = 0; requireI < this.requires.length ; requireI++){
			var requireIndicator = $('<div>',{
				'class': 'cube',
				css: {
					'background-color': this.requires[requireI]
				}
			})
			requireCubes.push(requireIndicator);
		}
		cubeIndicator.append(requireCubes);
		var yieldCubes = [];
		for(var yieldI = 0; yieldI < this.yields.length; yieldI++){
			var yieldIndicator = $('<div>',{
				'class': 'cube',
				css: {
					'background-color': this.yields[yieldI]
				}
			})
			yieldCubes.push(yieldIndicator);			
		}
		cubeIndicator.append(yieldCubes);
		this.domElement.append(cubeIndicator);
		return this.domElement;
	}

}
















