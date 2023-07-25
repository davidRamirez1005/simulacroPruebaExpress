import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import { verifyJWT } from '../jwt/jwt.js';

dotenv.config();

const appEstadosDesc = express.Router();
appEstadosDesc.use(express.json());

/**
 *  ! Metodo GET Obtener los estados de los libros y sus descripciones
 */
appEstadosDesc.get('/', async (req, res) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(401).json({ error: "Token de autenticación no proporcionado" });
        }
        const jwtData = await verifyJWT(authorization);
        con.query(
            /* sql */`
            SELECT estado_libro.nombre,estado_libro.descripcion FROM estado_libro;`,
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

export default appEstadosDesc;