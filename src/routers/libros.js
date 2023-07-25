import { Router } from 'express'
import middlewareLibros from '../middleware/validarLibros.js'
import con from '../config/database.js';
import dotenv from 'dotenv';
import { verifyJWT } from '../jwt/jwt.js';

const appLibros = Router()

appLibros.post('/', middlewareLibros, (req, res) => res.send(JSON.stringify(req.body)))

/**
 *  ! Metodo GET 
 */
appLibros.get('/', async (req, res) => {
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
            SELECT * FROM libro;`,
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

export default appLibros;