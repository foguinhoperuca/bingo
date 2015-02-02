define([
	'jquery'
	, 'marionette'
	, 'underscore'
	, 'app'
], function ($, Marionette, _, App) {
	var itemView = Marionette.ItemView.extend({
		template: 'app/templates/bingo/play-item.tpl',
		tagName: 'tr'

		, serializeData: function() {
			var attrToView = _.clone(this.attributes) || {};

			// attrToView.speechs = this.collection.toJSON();

console.log(this.model.toJSON());
// console.log(attrToView);
			return attrToView;
		}
	});

	var CompositeView = Marionette.CompositeView.extend({
		itemView: itemView,
		template: 'app/templates/bingo/play.tpl',
		itemViewContainer: '#tbodyItem',
		className: 'box',
		tagName: 'div',

		initialize: function(coll) {
			this.collection = coll;

			// console.log(coll.toJSON());
		}

		, serializeData: function() {
			var attrToView = _.clone(this.attributes) || {};

			// FIXME must be dynamic!!
			attrToView.gift = 'Um rio de oportunidades...';
			attrToView.secondGift = 'ou um murro na boca!';

			attrToView.speechs = this.collection.toJSON();
console.log(attrToView);

			return attrToView;
		}

		, events: {
			'click .tdSpeech': 'hit'
		}

		, hit: function(ev) {
			ev.preventDefault();
			$(ev.currentTarget).toggleClass('success');
		}
	});

	return CompositeView;
});
