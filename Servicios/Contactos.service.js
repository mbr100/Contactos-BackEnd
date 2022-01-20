const db= require("../Servicios/bbdd.service");
const helper= require("../Util/helper.util");

async function getContactos() {
    const rows = await db.query(`SELECT * FROM Contacto`);
    return data = helper.emptyOrRows(rows);
}

module.exports = {
    getContactos
}