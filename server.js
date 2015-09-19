var express = require('express'),
	app = express(),
	logger = require('morgan'),
	path = require('path'),
	config = require('./config'),
	port = config.port,
	cors = require('cors');

app.use(express.static(path.join(__dirname + config.staticPath)));

app.use(cors());
app.options('*', cors());
app.set('appName', 'Skye');
app.use(logger('dev'));
app.use(function(req, res, next) {
	console.log('Someone just came to your app!', req.ip);
	next();
});

// Registing a route for the single page app



app.use('*', function(req, res) {
	res.sendFile(path.join(__dirname + config.staticPath));
});


app.listen(config.port, function() {
	console.log(app.get('appName') + ' is running on ' + config.port);
});
