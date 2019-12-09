var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb+srv://emanuel_18:EueM_Zasd6GYeZ7@base-de-datos-pagina-web-balww.mongodb.net/test?retryWrites=true&w=majority';

var client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if (err) {
        console.log('hubo un error' + err)
    }
    console.log('coneccion exitosa');
    var post =
        app.post("./", function(req, res) {
            db.collection("replicaset_mongo_client_collection").find({}, function(err, docs) {
                docs.each(function(err, doc) {
                    if (doc) {
                        console.log(doc);
                    } else {
                        res.end();
                    }
                });
            });
        });
});