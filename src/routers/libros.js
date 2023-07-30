import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLibros = express.Router();
appLibros.use(express.json());

/**
 *  ! Metodo GET Mostrar todos los libros con su título, autor y editorial
 */
appLibros.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT libro.titulo,autor.nombre as nombre_autor,editorial.nombre as nombre_editorial from libro
        INNER JOIN autor ON libro.id_autor = autor.id_autor
        INNER JOIN editorial ON libro.id_libro = editorial.id_editorial;`,
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

export default appLibros;