define([
		'underscore'
		, 'backbone'
], function (_, Backbone){
		var Collection = Backbone.Collection.extend({
				url: 'app/data/klarosk.json'
				, sizeBingoCard: 9

				, initialize: function(args) {
						
				}

				// FIXME it is hard to work with a list. Think what to do with the data source
				, parse: function(response) {

// console.log(response);
// console.log(response.length);

						var i,
								seed = new Uint32Array(10),
								random = [],
								selected = []
						;
						window.crypto.getRandomValues(seed);
						for (i = 0; i < this.sizeBingoCard; i++)
								random[i] = seed[i] % 10;

						for (i = 0; i < this.sizeBingoCard; i++) {
								selected[i] = response[random[i]];
								response = _.without(response, response[random[i]]);
						}

// console.log(seed);
// console.log(random);
// console.log(response);
// console.log(response.length);
// console.log(selected);
// console.log(selected.length);

						return selected;
				}
		});

		return Collection;
});
