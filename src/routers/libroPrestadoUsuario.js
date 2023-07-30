import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLibroUsusEsp = express.Router();
appLibroUsusEsp.use(express.json());

/**
 *  ! Metodo GET Obtener los libros prestados a un usuario específico (ejemplo: María Gómez). 
 */
appLibroUsusEsp.get('/:usuName', authenticateJWT, async (req, res) => {
    const usuName = req.params.usuName;
    con.query(
        /* sql */`
        SELECT libro.*, usuario.nombre as nombre_usuario from libro
        INNER JOIN usuario ON libro.id_autor = usuario.id_usuario
        WHERE usuario.nombre= ?`,
        [usuName],
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


export default appLibroUsusEsp;