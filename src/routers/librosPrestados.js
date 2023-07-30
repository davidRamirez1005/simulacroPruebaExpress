import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const applibrosPrestados = express.Router();
applibrosPrestados.use(express.json());

/**
 *  ! Metodo GET Obtener los libros prestados y su fecha de devolución.
 */
applibrosPrestados.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT libro.titulo, autor.nombre as nombre_autor, prestamo.estado,prestamo.fecha_devolucion   from libro
        INNER JOIN autor ON libro.id_autor = autor.id_autor
        INNER JOIN prestamo ON prestamo.id_prestamo = libro.id_libro
        WHERE prestamo.estado = 'Prestado'
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

export default applibrosPrestados;