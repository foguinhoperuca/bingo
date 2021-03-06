define([
		'handlebars'
		, 'underscore'
		, 'app'
], function(Handlebars, _, App) {
		// Handlebars.registerHelper('format', function(value, options) {
		// 	maskType = options.hash.mask;
		// 	switch(maskType) {
		// 		case 'cep':
		// 			return value.substring(0,5) + '-' + value.substring(5,8);
		// 			break;
		// 		case 'cpf':
		// 			return value.substring(0,3) + '.' + value.substring(3,6) + '.' + value.substring(6,9) + '-' + value.substring(9,11);
		// 			break;
		// 		case 'cnpj':
		// 			return value.substring(0,2) + '.' + value.substring(2,5) + '.' + value.substring(5,8) + '/' + value.substring(8,12) + '-' + value.substring(12,14);
		// 			break;
		// 		case 'numero':
		// 			return parseInt(value, 10).toLocaleString();
		// 			break;
		// 		case 'cpfCnpj':
		// 			if(value) {
		// 				if(value.length == 11) {
		// 					return value.substring(0,3) + '.' + value.substring(3,6) + '.' + value.substring(6,9) + '-' + value.substring(9,11);
		// 				} else {
		// 					return value.substring(0,2) + '.' + value.substring(2,5) + '.' + value.substring(5,8) + '/' + value.substring(8,12) + '-' + value.substring(12,14);
		// 				}
		// 			}
		// 			break;
		// 	}
		// });

		// TODO clean and organize
		Handlebars.registerHelper('valorCusto' , function(value, options) {
				return new Handlebars.SafeString('R$ ' + ((((typeof value) == 'number') && ((value % 1) === 0)) ? value.toString() + ',00' : value.toString().replace('.', ',')));
		});

		Handlebars.registerHelper('cif', function(value, options) {
				var test = options.hash.param,
						arrIn = options.hash['in'] ? options.hash['in'].split(',') : [],
						arrNotIn = options.hash['notIn'] ? options.hash['notIn'].split(',') : [];

				if(value && arrIn.length > 0) {
						if (_.contains(arrIn, value.toString())) {
								return options.fn(this);
						} else {
								return options.inverse(this);
						}
				}

				if(value && arrNotIn.length > 0) {
						if(!_.contains(arrNotIn, value.toString())) {
								return options.fn(this);
						} else {
								return options.inverse(this);
						}
				}

				if (value && Object.prototype.toString.call(value) === '[object Array]') {
						if (_.contains(value, test)) {
								return options.fn(this);
						}
				}

				if (value && value == test) {
						return options.fn(this);
				} else {
						return options.inverse(this);
				}
		});

		Handlebars.registerHelper('cunless', function(value, options) {
				var test = options.hash.param;

				if (value != test) {
						return options.fn(this);
				} else {
						return options.inverse(this);
				}
		});

		Handlebars.registerHelper('cutString', function(value, options) {
				if(value) {
						var range = options.hash.range.split(',');
						value = value.substring(range[0], range[1]) + '...';
						return new Handlebars.SafeString(value);
				} else {
						return new Handlebars.SafeString(value);
				}
		});

		Handlebars.registerHelper('mod', function(value, options) {
				var test = options.hash.valor != null ?  options.hash.valor : 2;

				if (value % test == 0) {
						return options.fn(this);
				} else {
						return options.inverse(this);
				}
		});

		Handlebars.registerHelper('br' , function(value, options) {
				if(value) {
						// value = value.replace(/\r\n/g,"<br>");
						value = value.replace(/\n/g,"<br>");
						return new Handlebars.SafeString(value);
				} else {
						return new Handlebars.SafeString(value);;
				}
		});

		Handlebars.registerHelper('logged', function(options) {
				var that = this;
				function logged() {
						var logged;
						App.isLogged(function(res) {
								if(res.logged) {
										logged = options.fn(that);
								} else {
										logged = options.inverse(that);
								}
						});
						return logged;
				}
				return logged();
		});

		Handlebars.registerHelper('printBingoCard', function(row) {
				// text = Handlebars.Utils.escapeExpression(text);
				// url = Handlebars.Utils.escapeExpression(url); 
				var result = row;

				return new Handlebars.SafeString(result);
		});


});
