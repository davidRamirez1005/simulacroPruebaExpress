import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLibrosMas = express.Router();
appLibrosMas.use(express.json());

/**
 *  ! Metodo GET Mostrar los libros con más de 500 páginas y su autor
 */
appLibrosMas.get('/', authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT libro.titulo,libro.num_paginas,autor.nombre,autor.apellido
        FROM libro
        INNER JOIN autor ON libro.id_autor = autor.id_autor
        WHERE libro.num_paginas >= 500`,
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


export default appLibrosMas;