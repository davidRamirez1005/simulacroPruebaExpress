import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import { verifyJWT } from '../jwt/jwt.js';

dotenv.config();

const appCategorias = express.Router();
appCategorias.use(express.json());

/**
 *  ! Metodo GET Listar todas las categorías disponibles.
 */
appCategorias.get('/', async (req, res) => {
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return res.status(401).json({ error: "Token de autenticación no proporcionado" });
        }
        const jwtData = await verifyJWT(authorization);
        con.query(
            /* sql */`
            SELECT * FROM categoria;`,
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

export default appCategorias;