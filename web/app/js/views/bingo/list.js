define([
	'underscore',
	'jquery',
	'marionette',
	'moment',
	'app',
	'models/bingo',
	'views/list',
	'models/setting'
], function (_, $, Marionette, Moment, App, BingoModel, ListView, SettingModel) {
	var itemView = Marionette.ItemView.extend({
		template: 'app/templates/bingo/list-item.tpl',
		tagName: 'tr'
	});

	var CompositeView = ListView.extend({
		template: 'app/templates/bingo/list.tpl',
		itemView: itemView,
		objectStore: 'bingos'
		, events: function() {
			return _.extend({}, ListView.prototype.events, {
				'click #btnSync': 'sync'
				, 'click .edit-td': 'edit'
				, 'click #deleteAll': 'deleteAll'
			});
		}
		// FIXME retrieve data from setting - in offline storage
		, serializeData: function() {
			var attrToView = _.clone(this.attributes) || {},
				config = new SettingModel().defaults(),
				modelStart,
				configStartTime = Moment(config.timesheet.startTime, 'HH:mm'),
				configEndTime = Moment(config.timesheet.endTime, 'HH:mm')
			;

			// // Total Days Late to Work
			// var daysLateToWork = this.daysLateToWork(this.collection.toJSON(), configStartTime);
			// attrToView.totalDaysLateToWork = daysLateToWork.length;

			// // Total Minutes After Start
			// var totalMinutesLaterAfterStart = this.totalMinutesLaterAfterStart(daysLateToWork, configStartTime);
			// attrToView.totalMinutesLaterAfterStart = totalMinutesLaterAfterStart;

			// // Total Extra Time
			// attrToView.totalExtraTime = this.totalExtraTime(this.collection.toJSON(), configStartTime, configEndTime, this.model.originalRule);
			// attrToView.totalExtraTimeRule30 = this.totalExtraTime(this.collection.toJSON(), configStartTime, configEndTime, this.model.rule30);

			// // Total Leaving Early
			// attrToView.totalLeavingEarly = this.totalTimeLeavingEarly(this.collection.toJSON());

			// // Balance
			// attrToView.balance = this.balance(Moment.duration(attrToView.totalExtraTime), Moment.duration(attrToView.totalLeavingEarly));

			// // Status
			// attrToView.status = this.status(daysLateToWork, totalMinutesLaterAfterStart);

			// // TODO filter by month
			// attrToView.selectMonth = JAMES_DATA.Parser.getMonths();

			return attrToView;
		}

		, edit: function(ev) {
			ev.preventDefault();

			window.location = '#bingo/' + ev.currentTarget.getAttribute('id');
		}

		, sync: function(ev) {
			ev.preventDefault();

			console.error('TODO');
		}

		, deleteAll: function(ev) {
			var i = 0, 
				self = this
			;

			ev.preventDefault();

			// console.log(this.collection);

			for (i = 0; i < this.collection.length; i++) {
				App.indexedDB.db.transaction([this.objectStore], 'readwrite').objectStore(this.objectStore).delete(i).onsuccess = function(e) {
					self.$el.find('#spanMessage').removeClass();
					self.$el.find('#spanMessage').addClass('col-xs-12 text-center alert alert-danger');
					self.$el.find('#spanMessage').html('Cleaned all bingos!!!').fadeIn().delay(5000).fadeOut();
				};
			}			
		}
	});

	return CompositeView;
});
