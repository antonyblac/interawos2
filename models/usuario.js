var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({ 
 name: { type: String },
 email: { type: String },
 genre: { type: String, enum: ['male', 'female'] }
});

module.exports = mongoose.model('Client', clientSchema);
Con esto ya podemos implementar la conexión a la base de datos en el archivo app.js añadiendo las siguientes líneas:

mongoose.connect('mongodb://localhost/clients', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});