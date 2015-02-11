define([
	'marionette'
	, 'app'
], function(Marionette, App){
	var itemView = Marionette.ItemView.extend({
		template: 'app/templates/menu.tpl',
		tagName: 'div',
		className: 'navbar navbar-inverse navbar-static-top'
	});

	return itemView;
});
