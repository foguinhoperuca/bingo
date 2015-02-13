define([
		'jquery'
		, 'marionette'
		, 'underscore'
		, 'app'
		, 'views/menu'
		, 'FlipClock'
], function ($, Marionette, _, App, MenuView, FlipClock) {
		var itemView = Marionette.ItemView.extend({
				template: 'app/templates/bingo/play.tpl',
				className: 'box',
				tagName: 'div'

				, initialize: function(coll) {
						this.collection = coll;
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

						for (i = 0; i < this.collection.sizeBingoCard; i = (i + step)) {
								row[i] = '<tr>';
								for (j = i; j < (i + step); j++) {
										row[i] += '<td class="tdSpeech">' + models[j].speech + '</td>';
								}
								row[i] += '</tr>\n';
						}
						attrToView.row = row;

						return attrToView;
				}

				, onRender: function() {
					var flipClock = new FlipClock(this.$el.find('#play-clock'), {
						autoStart: true,
						clockFace: 'DailyCounter',
						countdown: false
					});
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
});
