var http = require("http")
var puerto = 3000

var servidor = http.createServer(function(consulta, respuesta) {
    if (consulta.url === '/') {
        respuesta.end('bienvenido')
    } else {
        respuesta.end('ruta no encontrada')
    }
})

servidor.listen(puerto, function() {
    console.log(`prueba servidor ${puerto}`)
})