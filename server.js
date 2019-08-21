var express = require('express');
var app = express();

const sql = require("msnodesqlv8");

const connectionString = {
    server:".",
    Database: "PROYECTO_FINAL",
    Trusted_Connection: "Yes",
    Driver:"{SQL Server Native Client 11.0}"
};

const query = "SELECT * FROM secretaria.Barrio";
 
sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});
var server = app.listen(5000, function () {
    console.log('Server is running..');
});