const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://emanuel_18:<EueM_Zasd6GYeZ7>@base-de-datos-pagina-web-balww.mongodb.net/test?retryWrites=true&w=majority'

var nombre_base_datos = 'emanuel_18';

ClientRect.Mongo.connect(url, function(err, cliente) {
    if (err) {
        console.log('hubo un error' + JSON.stringify(err))
        process.exit(1)
    }
    console.log('conexion exitosa');

    var db = cliente.db(nombre_base_datos)
    db.collection('registrados').insertOne({ nombre: 'emanuel_18' })
    cliente.close();

});