import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appCategorias = express.Router();
appCategorias.use(express.json());

/**
 *  ! Metodo GET  listar categorias
 */
appCategorias.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT * from categoria;`,
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

export default appCategorias;