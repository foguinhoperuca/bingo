define([
	'underscore'
	, 'backbone'
], function (_, Backbone){
	var Collection = Backbone.Collection.extend({
		url: 'app/data/klarosk.json'
		, sizeBingoCard: 9

		, initialize: function(args) {
			
		}
		, parse: function(response) {

			var i,
				seed = new Uint32Array(this.sizeBingoCard),
				random = [],
				selected = []
			;
			window.crypto.getRandomValues(seed);
			for (i = 0; i < this.sizeBingoCard; i++)
				random[i] = Math.floor(seed[i] * seed.length);

			for (i = 0; i < this.sizeBingoCard; i++) {
				selected[i] = response[random[i]];
				response = _.without(response, response[random[i]]);
			}

			return selected;
		}
	});

	return Collection;
});
