import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appPrestamosUsu = express.Router();
appPrestamosUsu.use(express.json());

/**
 *  ! Metodo GET Listar los préstamos con fecha de préstamo y usuario que los realizó.
 */
appPrestamosUsu.get('/', authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT usuario.nombre,usuario.apellido, prestamo.fecha_prestamo
        FROM prestamo
        INNER JOIN usuario ON prestamo.id_usuario = usuario.id_usuario`,
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error al obtener los datos de libro");
            } else {
                res.send(data);
            }
        }
    );
});


export default appPrestamosUsu;