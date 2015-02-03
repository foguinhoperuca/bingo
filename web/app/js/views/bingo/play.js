define([
		'jquery'
		, 'marionette'
		, 'underscore'
		, 'app'
], function ($, Marionette, _, App) {
		var itemView = Marionette.ItemView.extend({
				template: 'app/templates/bingo/play.tpl',
				className: 'box',
				tagName: 'div'

				, initialize: function(coll) {
						this.collection = coll;

						// console.log(coll.toJSON());
				}

				, serializeData: function() {
						var attrToView = _.clone(this.attributes) || {},
								i,
								j,
								row = [[]],
								models = this.collection.toJSON(),
								step = Math.sqrt(this.collection.sizeBingoCard)
						;

						// FIXME must be dynamic!!
						attrToView.gift = 'Um rio de oportunidades...';
						attrToView.secondGift = 'ou um murro na boca!';

						// attrToView.speech = this.collection.toJSON();

// console.log(models);
// console.log(this.collection.sizeBingoCard);
// console.log(Math.sqrt(this.collection.sizeBingoCard));
						for (i = 0; i < this.collection.sizeBingoCard; i = (i + step)) {
// console.log('i: ' + i);
// console.log('i + step: ' + (i + step));
								row[i] = '<tr>';

								for (j = i; j < (i + step); j++) {
// console.log('j: ' + j);
										row[i] += '<td class="tdSpeech">' + models[j].speech + '</td>';
// console.log(row[i]);
								}

// console.log('--------------');
// console.log(row[i]);

								row[i] += '</tr>\n';
						}

						console.log(row);

						// for (i = 0; i < this.collection.sizeBingoCard; i = (i + step))
						// 		console.log(row[i]);
						// console.log(attrToView);

						attrToView.row = row;

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

		return itemView;

		//	var itemView = Marionette.ItemView.extend({
		//		template: 'app/templates/bingo/play-item.tpl',
		//		tagName: 'tr'

		//		, serializeData: function() {
		//			var attrToView = _.clone(this.attributes) || {};

		//			// attrToView.speechs = this.collection.toJSON();

		// console.log(this.model.toJSON());
		// // console.log(attrToView);
		//			return attrToView;
		//		}
		//	});

		//	var CompositeView = Marionette.CompositeView.extend({
		//		itemView: itemView,
		//		template: 'app/templates/bingo/play.tpl',
		//		itemViewContainer: '#tbodyItem',
		//		className: 'box',
		//		tagName: 'div',

		//		initialize: function(coll) {
		//			this.collection = coll;

		//			// console.log(coll.toJSON());
		//		}

		//		, serializeData: function() {
		//			var attrToView = _.clone(this.attributes) || {};

		//			// FIXME must be dynamic!!
		//			attrToView.gift = 'Um rio de oportunidades...';
		//			attrToView.secondGift = 'ou um murro na boca!';

		//			attrToView.speechs = this.collection.toJSON();
		// console.log(attrToView);

		//			return attrToView;
		//		}

		//		, events: {
		//			'click .tdSpeech': 'hit'
		//		}

		//		, hit: function(ev) {
		//			ev.preventDefault();
		//			$(ev.currentTarget).toggleClass('success');
		//		}
		//	});

		//	return CompositeView;
});
