var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "configuration"
});

/*const DB = con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/

exports.default = con;