define([
	'underscore'
	, 'collections/bingo'
	// , 'text!../../../../../../../test/data/timesheet/noDaysLater.json'
	, 'text!../../../../../../../data/klarosk.json'
], function (_, BingoCardCollection, Klarosk) {
	var helper = function() {
		this.printDeck = function() {
			var i,
				j,
				db = JSON.parse(Klarosk),
				wordCount = [],
				deckSize = 10,
				bingoCardGenerated,
				bingoCards = []
			;

			for (i = 0; i < db.length; i++)
				wordCount[db[i].speech] = 0;

			for (i = 0; i < deckSize; i++) {
				bingoCardGenerated = new BingoCardCollection();
				bingoCardGenerated.url = '../../../../../../../app/data/klarosk.json';
				bingoCardGenerated.fetch({async: false});

				bingoCards[i] = bingoCardGenerated.toJSON();
			}

			for (i = 0; i < deckSize; i++)
				for (j = 0; j < bingoCards[i].length; j++)
					wordCount[bingoCards[i][j].speech] += 1;

			console.log(wordCount);
		};
	};

	return helper;
});
