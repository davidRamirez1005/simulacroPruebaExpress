import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLibroAutorEspecifico = express.Router();
appLibroAutorEspecifico.use(express.json());

/**
 *  ! Metodo GET Mostrar los libros escritos por un autor específico (ejemplo: Gabriel García
 */
appLibroAutorEspecifico.get('/:autorName', authenticateJWT, async (req, res) => {
    const autorName = req.params.autorName;
    con.query(
        /* sql */`
        SELECT libro.*, autor.nombre as nombre_autor from libro
        INNER JOIN autor ON libro.id_autor = autor.id_autor
        WHERE autor.nombre = ?`,
        [autorName],
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


export default appLibroAutorEspecifico;