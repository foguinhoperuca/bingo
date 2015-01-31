define([
	'marionette'
	, 'underscore'
	, 'moment'
	, 'app'
	, 'views/register'
	, 'models/setting'
], function (Marionette, _, Moment, App, RegisterView, SettingModel) {
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

			console.log(coll);
		}

		// , events: {
		// 	'click .btn-warning': 'sync'
		// 	, 'click .btn-danger': 'delete'
		// }
		// , sync: function(ev) {
		// 	ev.preventDefault();
		// 	console.log('clear all not implemented...');
		// }
		// , delete: function(ev) {
		// 	ev.preventDefault();

		// 	var self = this;
		// 	var id = parseInt(ev.currentTarget.getAttribute('id'));
		// 	App.indexedDB.db.transaction([this.objectStore], 'readwrite').objectStore(this.objectStore).delete(id).onsuccess = function(e) {
		// 		var model = self.collection.where({id: id});
		// 		self.collection.remove(model);
		// 	};
		// }
	});

	return CompositeView;
});
