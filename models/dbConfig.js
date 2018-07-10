var mysql = require('mysql');
exports.getConnection = function(){
	
		var conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "crud_node"
		});
		return conn;
	
};
