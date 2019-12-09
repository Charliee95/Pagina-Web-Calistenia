var express = require('express');

var path = require('path');

var bodyParser = require('express');

var servidor = express();

var app = express();

var ruta = path.join(__dirname, './publico')

servidor.use(express.static(ruta))

servidor.use(bodyParser.urlencoded({ extended: false }))

servidor.use(bodyParser.json())

app.post('/api/mensajes', function(consulta, respuesta) {
    console.log('consulta.body.nombre')
    respuesta.end('bienvenido al club')
});


servidor.listen(3000, function() {
    console.log('escuchando en el puerto' + 3000)
});