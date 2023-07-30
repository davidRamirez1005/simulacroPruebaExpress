import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLinrosDisponibles = express.Router();
appLinrosDisponibles.use(express.json());

/**
 *  ! Metodo GET Mostrar los libros disponibles para préstamo con su título y autor..
 */
appLinrosDisponibles.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT libro.titulo, autor.nombre as nombre_autor, estado_libro.nombre  from libro
        INNER JOIN autor ON libro.id_autor = autor.id_autor
        INNER JOIN estado_libro ON estado_libro.id_estado = libro.id_autor
        WHERE estado_libro.nombre = 'Disponible'
        `,
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

export default appLinrosDisponibles;