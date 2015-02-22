require.config({
	urlArgs: 'cb=' + Math.random(),
	baseUrl: '../../js',
	paths: {
		// LIBS
		'underscore': 'libs/bower/underscore/underscore',
		'jquery': 'libs/bower/jquery/dist/jquery.min',
		'backbone': 'libs/bower/backbone/backbone',
		'marionette': 'libs/bower/backbone.marionette/lib/backbone.marionette.min',
		'handlebars': 'libs/bower/handlebars/handlebars.runtime.min',
		'bootstrap': 'libs/bower/bootstrap/dist/js/bootstrap.min',
		'epoxy': 'libs/bower/backbone.epoxy/backbone.epoxy.min',
		'jquerymask': 'libs/bower/jQuery-Mask-Plugin/jquery.mask.min',
		'jqueryui': 'libs/custom/jquery-ui-custom.min',
		'text': 'libs/bower/requirejs-text/text',
		'moment': 'libs/bower/moment/min/moment-with-langs.min',
		'firebase': 'libs/bower/firebase/firebase',
		'firebaseSimpleLogin': 'libs/bower/firebase-simple-login/firebase-simple-login',
		'hideShowPassword': 'libs/bower/hideShowPassword/hideShowPassword.min',
		'localforage': 'libs/bower/localforage/dist/localforage.min',
		'FlipClock': 'libs/bower/FlipClock/compiled/flipclock.min'

		// Test
		, 'jasmine': '../test/jasmine/lib/jasmine-1.3.0/jasmine'
		, 'jasmine-html': '../test/jasmine/lib/jasmine-1.3.0/jasmine-html'
		, 'spec': '../test/jasmine/spec'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		},
		'handlebars': {
			exports: 'Handlebars'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports : 'bootstrap'
		},
		'epoxy': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Epoxy'
		},
		'jquerymask': {
			deps: ['jquery'],
			exports : 'jquerymask'
		},
		'jqueryui': {
			deps: ['jquery'],
			exports : 'jqueryui'
		},
		'moment': {
			exports : 'Moment'
		},
		'firebase': {
			exports: 'Firebase'
		},
		'firebaseSimpleLogin': {
			exports: 'FirebaseSimpleLogin'
		},
		'hideShowPassword': {
			deps: ['jquery'],
			exports : 'HideShowPassword'
		}
		// , 'localforage': {
		// 	deps: ['jquery'],
		// 	exports : 'localforage'
		// }

		, 'FlipClock': {
			deps: ['jquery'],
			exports : 'FlipClock'
		}

		// Test
		, 'jasmine' : {
			exports: 'jasmine'
		}
		, 'jasmine-html' : {
			deps: ['jasmine']
			, exports: 'jasmine'
		}
	}
});

require([
	'jasmine-html'
	// , '../test/jasmine/spec/appSpec'
	// , '../test/jasmine/spec/settingsSpec'
	, '../test/jasmine/spec/playSpec'
], function(Jasmine) {
    var jasmineEnv = Jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new Jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
	jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

	jasmineEnv.execute();
});
