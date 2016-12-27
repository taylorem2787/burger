var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port: 3306,
	user: 'qlyjmwmo5mh22eay',
	password: 'wnh3khfstx9y5k7f',
	database: 'df178lc2sy8t3n6l'
});

connection.connect(function(err){
	if (err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;