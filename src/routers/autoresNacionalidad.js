import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import { verifyJWT } from '../jwt/jwt.js';

dotenv.config();

const appAutores = express.Router();
appAutores.use(express.json());

/**
 *  ! Metodo GET listar los autores
 */
appAutores.get('/', async (req, res) => {
    const { authorization } = req.headers;

    try {
        // Verificar si existe un token JWT en los encabezados
        if (!authorization) {
            return res.status(401).json({ error: "Token de autenticación no proporcionado" });
        }
        // Verificar el token JWT utilizando la clave secreta
        const jwtData = await verifyJWT(authorization);
        con.query(
            /* sql */`
            SELECT * FROM autor;`,
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

export default appAutores;