import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appEstadosDesc = express.Router();
appEstadosDesc.use(express.json());

/**
 *  ! Metodo GET  Obtener los estados de los libros y sus descripciones
 */
appEstadosDesc.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT estado_libro.nombre,estado_libro.descripcion  from estado_libro;`,
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error al obtener los datos de duenio_Mascota");
            } else {
                res.send(data);
            }
        }
    );
});

export default appEstadosDesc;