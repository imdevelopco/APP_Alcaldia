var express = require('express');
var morgan = require('morgan');
var app = express();
var route = require('./src/Routes/routes.secretaria.ruta')
var path = require('path');
var bodyParser = require('body-parser')

// Middleware
console.log(__dirname);

app.use(express.static(path.join(__dirname,'src','public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/',route);


var server = app.listen(3000, function () {
    console.log('Server is running on port 3000');
});