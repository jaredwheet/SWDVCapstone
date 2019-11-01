// mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Devils12",
  database: "baby_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  ;
});



// // main homepage button click functions 
// $("#startFeed").click(function () {
//     console.log("starting feeding");
// });

// $("#endFeed").click(function () {
//     console.log("feeding over");
// });

// $("#startSleep").click(function () {
//     console.log("starting sleep. yes!!!");
// });

// $("#endSleep").click(function () {
//     console.log("oh no, sleep time is over. ");
// });