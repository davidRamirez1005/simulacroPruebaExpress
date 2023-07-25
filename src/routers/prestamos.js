import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import { verifyJWT } from '../jwt/jwt.js';

dotenv.config();

const appPrestamosRealizados = express.Router();
appPrestamosRealizados.use(express.json());

/**
 *  ! Metodo GET Listar los préstamos realizados con fecha de préstamo, fecha de devolución y estado.
 */
appPrestamosRealizados.get('/', async (req, res) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(401).json({ error: "Token de autenticación no proporcionado" });
        }
        const jwtData = await verifyJWT(authorization);
        con.query(
            /* sql */`
            SELECT prestamo.fecha_prestamo, prestamo.fecha_devolucion, prestamo.estado, 
            libro.titulo AS titulo_libro, usuario.nombre AS nombre_usuario, usuario.apellido AS apellido_usuario
            FROM prestamo
            INNER JOIN libro ON prestamo.id_libro = libro.id_libro
            INNER JOIN usuario ON prestamo.id_usuario = usuario.id_usuario;;`,
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

export default appPrestamosRealizados;