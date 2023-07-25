import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import { verifyJWT } from '../jwt/jwt.js';

dotenv.config();

const apptituloAutorEditorial = express.Router();
apptituloAutorEditorial.use(express.json());

/**
 *  ! Metodo GET Mostrar todos los libros con su título, autor y editorial.
 */
apptituloAutorEditorial.get('/', async (req, res) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(401).json({ error: "Token de autenticación no proporcionado" });
        }
        const jwtData = await verifyJWT(authorization);
        con.query(
            /* sql */`
            SELECT libro.titulo, autor.nombre AS nombre_autor, autor.apellido AS apellido_autor, editorial.nombre AS nombre_editorial
            FROM libro
            INNER JOIN autor ON libro.id_autor = autor.id_autor
            INNER JOIN editorial ON libro.id_editorial = editorial.id_editorial;`,
            (err, data, fields) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Error al obtener los datos");
                } else {
                    res.send(data);
                }
            }
        );
    } catch (error) {
        res.status(401).json({ error: "Token de autenticación inválido o ha expirado" });
    }
});

export default apptituloAutorEditorial;