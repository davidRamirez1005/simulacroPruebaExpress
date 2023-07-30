import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLibroEditorial = express.Router();
appLibroEditorial.use(express.json());

/**
 *  ! Metodo GET Obtener los libros de cierta editorial (ejemplo: Editorial Planeta). 
 */
appLibroEditorial.get('/:editorial', authenticateJWT, async (req, res) => {
    const editorial = req.params.editorial;
    con.query(
        /* sql */`
        SELECT libro.*, editorial.nombre as nombreEditorial
        FROM libro
        INNER JOIN editorial ON libro.id_editorial = editorial.id_editorial
        WHERE editorial.nombre = ?`,
        [editorial],
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


export default appLibroEditorial;