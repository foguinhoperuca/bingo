define([
], function () {
	var IndexedDB = function () {
		this.db =  function() {
			// if (!window.indexedDB)
			// 	console.error('[WARNING] No indexedDB API to start app. Is your browser supported?');

			return null;
		};

		this.openDB = function() {
			var self = this;
			var request = window.indexedDB.open('bingo', 1);

			request.onsuccess = function(e) {
				self.db = e.target.result;
			};

			request.onerror = function(err) {
				console.error("[WARNING] Failed to start indexedDB!");
				console.error(err);
			};

			request.onupgradeneeded = function(event) { 
				var db = event.target.result;
				db.createObjectStore('bingos', { keyPath: 'id', autoIncrement: true});
				db.createObjectStore('settings', { keyPath: 'id', autoIncrement: true});
			};

			return request;
		};

		/*
		 * callback must receive e.target.result as arg[0]
		 */
		// FIXME open and close tx: http://www.w3.org/TR/IndexedDB/#database-closing-steps
		// TODO migrate to https://github.com/mozilla/localForage
		this.transaction = function(callback) {
			var self = this,
				request = window.indexedDB.open('bingo', 1)
			;

			request.onsuccess = function(e) {
				callback(e.target.result);
			};

			request.onerror = function(err) {
				console.error("[WARNING] Failed to start indexedDB!");
				console.error(err);
			};

			request.onupgradeneeded = function(event) { 
				var db = event.target.result;
				db.createObjectStore('bingos', { keyPath: 'id', autoIncrement: true});
				db.createObjectStore('settings', { keyPath: 'id', autoIncrement: true});
			};

			return request;
		};

		return this;
    };

    return IndexedDB;
});
