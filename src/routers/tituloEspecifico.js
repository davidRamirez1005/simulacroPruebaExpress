import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appTituloEspecifico = express.Router();
appTituloEspecifico.use(express.json());

/**
 *  ! Metodo GET Mostrar los libros con título que contengan la palabra "Tokio". 
 */
appTituloEspecifico.get('/:tituloEsp', authenticateJWT, async (req, res) => {
    const tituloEsp = req.params.tituloEsp;
    con.query(
        /* sql */`
        SELECT *
        FROM libro
        WHERE libro.titulo = ?`,
        [tituloEsp],
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


export default appTituloEspecifico;