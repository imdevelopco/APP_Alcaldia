var express = require('express');
var morgan = require('morgan');
var app = express();

var path = require('path');
var bodyParser = require('body-parser')

// Middleware
console.log(__dirname);

app.use(express.static(path.join(__dirname,'src','public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
//Routes
app.use(require('./src/Routes/routes.nombreTablas'));

app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.ruta'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.barrio'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.empresa'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.familia'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.guarderia'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.institucion'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.localidad'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.parvulos'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.nivel_socioeconomico'));
app.use(require('./src/Routes/Routes_Secretaria/routes.secretaria.ruta_barrio'));

app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.empleado'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.enfermedad_pacientes'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.enfermedad'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.estudiante'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.historia_clinica'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.jornada'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.modalidad_estudio'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.persona'));
app.use(require('./src/Routes/Routes_Sistemas/routes.sistemas.tipo_habitacion'));


var server = app.listen(3000, function () {
    console.log('Server is running on port 3000');
});