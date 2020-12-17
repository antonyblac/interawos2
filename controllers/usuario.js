var mongoose = require('mongoose');
var usuario = mongoose.model('usuario');


//GET - OBTENER TODOS LOS REGISTRADOS
exports.findAll = function(req, res) {
 usuario.find(function(err, usuario) {
 if(err) res.send(500, err.message);
 console.log('GET /clients')
 res.status(200).jsonp(usuario);
 });
};


//GET - DE ACUERDO A UN ID ESPECIFICADO
exports.findById = function(req, res) {
 usuario.findById(req.params.id, function(err, usuario) {
 if(err) return res.send(500, err.message);
 console.log('GET /clients/' + req.params.id);
 res.status(200).jsonp(usuario);
 });
};

//POST - INSERTAR UN NUEVO REGISTRO
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var usuario = new usuario({
nombre: req.body.nombre,
primer_apellido: req.body.primer_apellido,
segundo_apellido: req.body.segundo_apellido,
edad: req.body.edad,
curp: req.body.edad,
 });

 usuario.save(function(err, usuario) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(usuario);
 });
};

//PUT - ACTUALIZAR UN USUARIO REGISTRADP
exports.update = function(req, res) {
 usuario.findById(req.params.id, function(err, usuario) {
 usuario.nombre = req.body.nombre; este es un ejemplo pero asi quedaria con tus datos
 usuario.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(usuario);
 });
 });
};

//DELETE - ELIMINAR DE ACUERDO A UN ID EN ESPECIFICO
exports.delete = function(req, res) {
 usuario.findById(req.params.id, function(err, client) {
 usuario.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'ELIMINADO CORRECTAMENTE' });
 });
 });
};


