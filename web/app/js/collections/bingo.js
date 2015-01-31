define([
	'backbone'
], function (Backbone){
	var Collection = Backbone.Collection.extend({
		url: '../../data/simple-bingo-card.json'
	});

	return Collection;
});
