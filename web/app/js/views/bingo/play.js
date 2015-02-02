define([
	'jquery'
	, 'marionette'
	, 'underscore'
	, 'app'
], function ($, Marionette, _, App) {
	var itemView = Marionette.ItemView.extend({
		template: 'app/templates/bingo/play-item.tpl',
		tagName: 'tr'
	});

	/*
	 * Must implement the follow:
	 * - itemView (tagName and template)
	 * - template of composite view
	 * - Must receive a collection in constructor
	 * - Must define objectStore (string)
	 */
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
