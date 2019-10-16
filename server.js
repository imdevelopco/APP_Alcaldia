var express = require('express');
var morgan = require('morgan');

var app = express();

var path = require('path');
// Middleware
console.log(__dirname);

app.use(express.static(path.join(__dirname,'src','public')));
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./src/Routes/routes.nombreTablas'));
//Archivo donde estan todas las rutas
app.use(require('./src/Routes/router'));

var server = app.listen(3000, function () {
    console.log('Server is running on port 3000');
});