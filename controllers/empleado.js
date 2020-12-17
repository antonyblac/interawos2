var mongoose = require('mongoose');
const departamento = require('../models/departamento');
var empleado = mongoose.model('empleado');

//GET - OBTENER TODOS LOS REGISTRADOS
exports.findAll = function(req, res) {
 empleado.find(function(err, empleado) {
 if(err) res.send(500, err.message);
 console.log('GET /clients')
 res.status(200).jsonp(empleado);
 });
};


//GET - DE ACUERDO A UN ID ESPECIFICADO
exports.findById = function(req, res) {
 departamento.findById(req.params.id, function(err, departamento) {
 if(err) return res.send(500, err.message);
 console.log('GET /clients/' + req.params.id);
 res.status(200).jsonp(client);
 });
};

//POST - INSERTAR UN NUEVO REGISTRO
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var empleado = new empleado({
 nombre: req.body.nombre (igual aqui es un ejemplo)
 });
 empleado.save(function(err,empleado) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(empleado);
 });
};

//PUT - ACTUALIZAR UN USUARIO REGISTRADP
exports.update = function(req, res) {
 emplea.findById(req.params.id, function(err, client) {
 client.nombre = req.body.nombre; este es un ejemplo pero asi quedaria con tus datos
 client.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(client);
 });
 });
};

//DELETE - ELIMINAR DE ACUERDO A UN ID EN ESPECIFICO
exports.delete = function(req, res) {
 Client.findById(req.params.id, function(err, client) {
 client.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'ELIMINADO CORRECTAMENTE' });
 });
 });
};


