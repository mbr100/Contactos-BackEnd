const express = require('express');
const contactos = require('./Rutas/Contactos.router');
const app = express();
var cors = require('cors');

//Creamos el servidor
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

//Arranque del servidor
app.listen(4000, ()=> {
    console.log('El servidor está corriendo perfectamente');
});

//Escuchamos Rutas
app.use('/contactos', contactos);