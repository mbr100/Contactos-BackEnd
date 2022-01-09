const express = require('express');
const mysql = require('mysql2');
const ruta = express.Router();
let resultados;


//Creamos el servidor
const app = express();
app.use(express.json());


//Creamos la conexion a la base de datos
const connectDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cuatroencasa',
    database: 'Contactos'
});

app.listen(4000, ()=> {
    console.log('El servidor está corriendo perfectamente');
});

app.get('/contactos', (req, res) => {
    connectDB.query(
        ' SELECT * FROM `Contacto` ',
        function(err, results, fields)
        {
            if(err) console.log(err);
            else res.send(results);
        }
    );
});