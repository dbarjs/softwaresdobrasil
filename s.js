
// test use only
var express = require('express');
var stormpath = require('express-stormpath');
var path = require('path');

var app = express();

app.use(stormpath.init(app, {
	application: {
		href: "https://api.stormpath.com/v1/applications/70Yi3u2jM8Yw5x7NjxOhTl"
	},
	website: true,
	web: {
		login: {
			view: path.join(__dirname, 'views', 'login.jade')
		},
		register: {
			view: path.join(__dirname, 'views', 'register.jade')
		}
	}
}));

app.get('/', stormpath.loginRequired, function(req, res) {
	res.send('Hi ' + req.user.givenName);
});

app.get('/api/test', stormpath.apiAuthenticationRequired,function(req, res) {
	res.json({
		test: 'successful!'
	});
});

app.get('/api/', stormpath.loginRequired, function(req, res, next) {
	req.user.createApiKey(function(err, key) {
		if (err) {
			return next(err);
		}

		res.send('API Key ID: ' + key.id + ' API Key Secret: ' + key.secret);
	})
});

app.on('stormpath.ready', function() {
	app.listen(3000);
	console.log('API is running on port 3000');
});