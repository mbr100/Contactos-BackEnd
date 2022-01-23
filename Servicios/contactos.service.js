const db= require("./db.service");
const helper= require("../Util/helper.util");

async function getContactos() {
    const rows = await db.query(`SELECT * FROM Contacto`);
    return helper.emptyOrRows(rows);
}

async function getContactosListado() {
    const rows = await db.query(`SELECT C.Id_Contacto, C.Nombre, C.Telefono, C.Email FROM Contacto C`);
    return  helper.emptyOrRows(rows);
}

async function getContacto(id) {
    const rows = await db.query(`SELECT * FROM Contacto WHERE Id_Contacto = ?`, [id]);
    return helper.emptyOrRows(rows);
}

async function createContacto(contacto) {
    const { Nombre, Apellido_1, Apellido_2, Telefono, Email } = contacto;
    const rows = await db.query(`INSERT INTO Contacto (Nombre, Apellido_1, Apellido_2, Telefono, Email) VALUES (?, ?, ?, ?, ?)`,
        [Nombre, Apellido_1, Apellido_2, parseInt(Telefono), Email]);
    return helper.emptyOrRows(rows);
}


module.exports = {
    getContactos,
    getContactosListado,
    getContacto,
    createContacto
}