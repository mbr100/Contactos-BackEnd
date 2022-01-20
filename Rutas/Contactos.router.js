const express = require('express');
const ruta = express.Router();
const contactoControler = require("../Controladores/contactos.controler");


ruta.get('/', contactoControler.getContactos);


module.exports = ruta;