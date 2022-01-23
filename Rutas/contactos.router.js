const express = require('express');
const ruta = express.Router();
const contactoControler = require("../Controladores/contactos.controler");


ruta.get('/', contactoControler.getContactos);
ruta.get('/:id', contactoControler.getContacto);
ruta.post('/', contactoControler.create);


module.exports = ruta;