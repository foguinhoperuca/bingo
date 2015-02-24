define([
	'underscore'
	, 'helper'
	, 'collections/bingo'
	// , 'text!../../../../../../../test/data/timesheet/noDaysLater.json'
	, 'text!../../../../../../../data/klarosk.json'
], function (_, Helper, BingoCardCollection, Klarosk) {

	return describe('Play.', function() {
		describe('Bingo Card Generator', function() {
			it('Shouldn\'t have duplicate speech in *SAME* bingo card.', function() {
				var helper = new Helper();
				helper();

				return true;
			});
		});
	});
});
