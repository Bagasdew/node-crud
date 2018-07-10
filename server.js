var app = require('./controllers/app.js');
var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Web App Hosted at http://localhost:%s',port);
});