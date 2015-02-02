define([
	'backbone'
	, 'app'
	, 'models/indexedDB'
	, 'collections/generic'
	, 'collections/bingo'
	, 'views/bingo/register'
	, 'views/bingo/list'
	, 'views/bingo/play'
	, 'views/backup'
	, 'views/settings'
	, 'models/bingo'
	, 'models/setting'
], function (Backbone, App, IndexedDB, Collection, BingoCollection, BingoRegisterView, BingosListView, PlayView, BackupView, SettingsView, BingoModel, SettingModel) {
	var DailyActivitiesController = Backbone.Router.extend({
		routes: {
			'bingos': 'bingos'
			, 'bingo/new': 'bingo'
			, 'bingo/play': 'play'
			, 'bingo/:id': 'bingo'

			, 'backup': 'backup'

			, 'settings': 'settings'
		},

		bingos: function() {
			this.list('bingos', BingosListView, new BingoModel);
		},
		bingo: function(id) {
			this.register(id, 'bingos', BingoModel, BingoRegisterView);
		},
		play: function() {
			var bingoCard = new BingoCollection();

			bingoCard.fetch({async: false});
			App.mainRegion.show(new PlayView(bingoCard));
			// bingoCard.fetch({
			// 	success: function(collection, response, options) {
			// 		// console.log(collection);
			// 		// console.log(response);
			// 		// console.log(options);

			// 		App.mainRegion.show(new PlayView(collection));
			// 	}
			// });
		},

		backup: function() {
			App.mainRegion.show(new BackupView());
		},

		settings: function() {
			// FIXME always will be id 1? How I can guarantee this?
			var objectStore = App.indexedDB.db.transaction(['settings']).objectStore('settings').get(1);
			objectStore.onsuccess = function(event) {
				App.mainRegion.show(new SettingsView(new SettingModel(event.target.result)));
			};
		},

		list: function(entity, View, model) {
			var entities = [];

			// var indexedDB = new IndexedDB();
			// indexedDB.openDB();
			// indexedDB.db.transaction([entity], 'readonly').objectStore(entity).openCursor().onsuccess = function(e) {
			App.indexedDB.db.transaction([entity], 'readonly').objectStore(entity).openCursor().onsuccess = function(e) {
				var cursor = e.target.result;
				if (cursor) {
					entities.push(cursor.value);
					cursor.continue();
				} else {
					var collection = new Collection(entities);
					App.mainRegion.show(new View(collection, model));
				}
			};
		},
		register: function(id, entity, Model, RegisterView) {
			// FIXME after first time, var App.indexedDB.db is equal to null. Why?
			// console.log(App.indexedDB);
			// console.log(App.indexedDB.db);
			// if (App.indexedDB.db() == null) {
			// 	console.log('App.indexedDB.db is null');
			// 	App.initializeDB();
			// }

			// var indexedDB = new IndexedDB();
			// indexedDB.openDB();
			// var objectStore = indexedDB.db.transaction([entity]).objectStore(entity).get(id != undefined ? parseInt(id) : 0);
			var objectStore = App.indexedDB.db.transaction([entity]).objectStore(entity).get(id != undefined ? parseInt(id) : 0);
			objectStore.onsuccess = function(event) {
				var model = new Model(event.target.result);
				App.mainRegion.show(new RegisterView(model));
			};
		}
	});

	return DailyActivitiesController;
});
