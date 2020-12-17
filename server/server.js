const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('BIENVENIDO');

});

app.get('/usuario', function (req, res) {
    res.json({ 
        ok: 200 ,
        mesaje: 'Usuario consultado con exito'
    });
});

app.post('/usuario/', function (req, res) {
    let id = req.body.id;
    let nombre = req.body.nombre;
    let primer_apellido = req.body.primer_apellido;
    let segundo_apellido = req.body.segundo_apellido;
    let edad = req.body.edad;
    let curp = req.body.curp;
    let telefono = req.body.telefono;
    let mail = req.body.mail;
    let activo = req.body.activo;

    res.json({ 
        ok: 200 ,
        mesaje: 'Usuario insertado con exito',
  
     id:id,
     nombre:nombre,
     primer_apellido:primer_apellido,
     segundo_apellido:segundo_apellido,
     edad:edad,
     curp:curp,
     telefono:telefono,
     mail:mail,
     activo:activo

    });
  
});
app.put('/usuario/:id/:nombre/:primer_apellido/:segundo_apellido/:edad/:curp/:telefono/:email/:activo', function (req, res) {
    let nombre = req.params.nombre;

    res.json({ 
        ok: 200 ,
        mesaje: 'Usuario actualizado con exito',
  
        id: id ,
        nombre: nombre
    });
  
});

 
app.listen(3000, () => {
    console.log('EL SERVIDOR ESTA EN LINEA') 
});

