define([
	'underscore'
	, 'app'
	, 'collections/bingo'
	// , 'text!../../../../../../../test/data/timesheet/noDaysLater.json'
	, 'text!../../../../../../../data/klarosk.json'
], function (_, App, BingoCardCollection, Klarosk) {
	return describe('Play.', function() {
		describe('Bingo Card Generator', function() {
			// FIXME how many duplicateds? See requirements and implementation again!
			it('Shouldn\'t have duplicate speechs (less than XXX% can be duplicated!)!', function() {
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
// console.log(bingoCards)

				for (i = 0; i < deckSize; i++) {
					for (j = 0; j < bingoCards[i].length; j++)
						wordCount[bingoCards[i][j].speech] += 1;
				}
console.log(wordCount);

				return true;
			});

			it('Shouldn\'t have duplicate speech in *SAME* bingo card.', function() {
				return true;
			});
		});
	});
});
