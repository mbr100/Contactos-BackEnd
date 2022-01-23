const contactosService = require('../Servicios/contactos.service');

async function getContactos(req, res,next) {
    try {
        res.json(await contactosService.getContactosListado());
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}

async function getContacto(req, res,next) {
    try {
        res.json(await contactosService.getContacto(req.params.id));
    } catch (err) {
        console.error(`Error while getting programming language ${req.params.id}`, err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        let result = await contactosService.createContacto(req.body);
        console.log(result);
        res.json(result);
    } catch (err) {
        console.error(`Error while creating programming language ${req.body.nombre}`, err.message);
        next(err);
    }
}

module.exports = {
    getContactos,
    getContacto,
    create
}