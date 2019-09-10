var express = require('express');
var morgan = require('morgan');
var app = express();
var route = require('./src/Routes/routes.alcaldia')
var path = require('path');
var webpack = require('webpack');

// Middleware
console.log(__dirname);

app.use(express.static(path.join(__dirname,'src','public')));
app.use(morgan('dev'));


app.use('/',route);

var server = app.listen(3000, function () {
    console.log('Server is running on port 3000');
});