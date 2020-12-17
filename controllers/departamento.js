var mongoose = require('mongoose');
var departamento = mongoose.model('departamento');

//GET - OBTENER TODOS LOS REGISTRADOS
exports.findAll = function(req, res) {
 departamento.find(function(err, departamento) {
 if(err) res.send(500, err.message);
 console.log('GET /clients')
 res.status(200).jsonp(clients);
 });
};


//GET - DE ACUERDO A UN ID ESPECIFICADO
exports.findById = function(req, res) {
 departamento.findById(req.params.id, function(err, departamento) {
 if(err) return res.send(500, err.message);
 console.log('GET /clients/' + req.params.id);
 res.status(200).jsonp(departamento);
 });
};

//POST - INSERTAR UN NUEVO REGISTRO
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var departamento = new departamento({
 nombre: req.body.nombre (igual aqui es un ejemplo)
 });
 departamento.save(function(err, departamento) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(departamento);
 });
};

//PUT - ACTUALIZAR UN USUARIO REGISTRADP
exports.update = function(req, res) {
 departamento.findById(req.params.id, function(err, departamento) {
 departamento.nombre = req.body.nombre; este es un ejemplo pero asi quedaria con tus datos
 departamento.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(departamento);
 });
 });
};

//DELETE - ELIMINAR DE ACUERDO A UN ID EN ESPECIFICO
exports.delete = function(req, res) {
 departamento.findById(req.params.id, function(err, client) {
 departamento.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'ELIMINADO CORRECTAMENTE' });
 });
 });
};


