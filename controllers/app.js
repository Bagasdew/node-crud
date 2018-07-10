var express = require('express');
var app = express();
var user = require('../models/user.js');
app.get('/api/all', function (req, res) {
	
	user.getAll(function (err, result) {
		if (!err) {
			res.send(result);
		}else{
			res.status(500).send("Some error");
		}
	});
});
app.get('/api/user/:userid', function (req, res) {
	var id = req.params.userid;
	console.log(id);
	user.getUser(id, function (err, result) {
		if (!err) {
			res.send(result);
		}else{
			res.status(500).send("Some error");
		}
	});
});
app.post('/api/add/:uname',function(req,res){
	var userobj = {};
	console.log(req.params.uname);
	userobj.username = req.params.uname;
	userobj.password = req.params.uname;
	userobj.email = req.params.uname + "@mail.com";
	userobj.role = 'user';
	user.addUser(userobj,function (err, result) {
		if (!err) {
			res.send(result);
		}else{
			res.status(500).send("Some error");
		}
	});
});
module.exports = app