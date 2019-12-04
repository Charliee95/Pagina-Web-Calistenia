var express = require('express');
var servidor = express();
var bodyParser = require('body-parser');

servidor.post('/', function(consulta, respuesta) {
    respuesta.end('bienvenido')
});


servidor.listen(3000, function() {
    console.log('escuchando en el puerto' + 3000)
});