define([
	'backbone'
    , 'app'
], function (Backbone, App) {
    var Model = Backbone.Model.extend({
		defaults: {
			date: App.dateFormat(new Date())
			, b: 'Bingo b'
			, i: 'Bingo i'
			, n: 'Bingo n'
			, g: 'Bingo g'
			, o: 'Bingo o'
		}

		// , validade: function(attr, options) {
		// 	if (attr.words == '')
		// 		return 'Words can\'t be empty';

		// 	// TODO implement more validation
		// 	// if (attr.startTime == '' && attr.endTime == '' && (attr.leavingEarly == '' || attr.leavingEarly == null))
		// 	// 	return 'startTime && endTime && leavingEarly can\'t be empty!';
		// }
    });

    return Model;
});
