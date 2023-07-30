import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLibroCategoria = express.Router();
appLibroCategoria.use(express.json());

/**
 *  ! Metodo GET .Obtener los libros de cierta categoría (ejemplo: Novela)
 */
appLibroCategoria.get('/:cateName', authenticateJWT, async (req, res) => {
    const cateName = req.params.cateName;
    con.query(
        /* sql */`
        SELECT libro.*, categoria.nombre as nombre_categoria
        FROM libro
        INNER JOIN categoria ON libro.id_categoria = categoria.id_categoria
        WHERE categoria.nombre = ?`,
        [cateName],
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


export default appLibroCategoria;