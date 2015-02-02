define([
	'backbone'
], function (Backbone){
	var Collection = Backbone.Collection.extend({
		url: 'app/data/simple-bingo-card.json'
	});

	return Collection;
});
