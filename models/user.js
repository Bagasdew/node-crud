var db = require('./dbConfig.js');
var userDB = {
	getAll: function (callback) {
		var conn = db.getConnection();
		conn.connect(function (err) {
			if (err) {
				console.log(err);
				return callback(err,null);
			}
			else {
				console.log("Connected!");
				var sql = 'SELECT * FROM user';
				conn.query(sql, function (err, result)
				{
					conn.end();
					if (err) {
						console.log(err);
						return callback(err,null);
					} else {
						return callback(null, result);
					}
				});
			}
		});
	},
	getUser: function (userid, callback) {
		var conn = db.getConnection();
		conn.connect(function (err) {
			if (err) {
				console.log(err);
				return callback(err,null);
			}
			else {
				console.log("Connected!");
				var sql = 'SELECT * FROM user WHERE id = ?';
				conn.query(sql, [userid], function (err, result)
				{
					conn.end();
					if (err) {
						console.log(err);
						return callback(err,null);
					} else {
						return callback(null, result);
					}
				});
			}
		});
	},
	addUser : function (user, callback) {
		var conn = db.getConnection();
		conn.connect(function (err) {
			if (err) {
				console.log(err);
				return callback(err,null);
			}
			else {
				console.log("Connected!");
				var userobj = user;
				var sql = 'insert into user(username,password,email,role) values(?,?,?,?) ';
				conn.query(sql, [userobj.username,userobj.password,userobj.email,userobj.role], function (err, result)
				{
					conn.end();
					if (err) {
						console.log(err);
						return callback(err,null);
					} else {
						return callback(null, "Success");
					}
				});
			}
		});
	}
}
module.exports = userDB