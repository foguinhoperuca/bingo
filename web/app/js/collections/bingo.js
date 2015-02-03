define([
	'backbone'
], function (Backbone){
	var Collection = Backbone.Collection.extend({
		url: 'app/data/klarosk.json'
		, sizeBingoCard: 3

		, initialize: function(args) {
			
		}

		// FIXME it is hard to work with a list. Think what to do with the data source
		, parse: function(response) {
			// console.log(response);

			var row = [],
				columns = {},
				i,
				j
			;

			for (i = 0; i < this.sizeBingoCard; i++) {
				for (j = 0; j < this.sizeBingoCard; j++)
					columns[j] = j;
			
				row[i] = columns;
			}

// console.log(response);	
// console.log(row);

			// return row;
			return response;
		}
	});

	return Collection;
});
