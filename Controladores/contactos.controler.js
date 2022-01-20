const contactosService = require('../Servicios/Contactos.service');

async function getContactos(req, res,next) {
    try {
        res.json(await contactosService.getContactos());
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}

module.exports = {
    getContactos
}