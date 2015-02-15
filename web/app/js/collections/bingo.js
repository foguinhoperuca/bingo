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
				selected = [],
				min = 0,
				max = response.length - 2 // there is a brackets in the first line and another in the last one.
			;
			window.crypto.getRandomValues(seed);
			for (i = 0; i < this.sizeBingoCard; i++)
				random[i] = Math.floor(Math.random() * (max - min + 1)) + min;

			// TODO remove repeated numbers
console.log(random);

			for (i = 0; i < this.sizeBingoCard; i++) {
				selected[i] = response[random[i]];
				// response = _.without(response, response[random[i]]);
			}

			return selected;
		}
	});

	return Collection;
});
