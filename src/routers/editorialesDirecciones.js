import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appEditorales = express.Router();
appEditorales.use(express.json());

/**
 *  ! Metodo GET  Mostrar todas las editoriales y sus direcciones.
 */
appEditorales.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT editorial.nombre,editorial.direccion  from editorial;`,
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

export default appEditorales;