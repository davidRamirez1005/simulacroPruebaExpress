import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appPrestamosRealizados = express.Router();
appPrestamosRealizados.use(express.json());

/**
 *  ! Metodo GET Listar los préstamos realizados con fecha de préstamo,fecha de devolución y estado.
 */
appPrestamosRealizados.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT prestamo.fecha_prestamo,prestamo.fecha_devolucion,prestamo.estado from prestamo;`,
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error al obtener los datos de duenio_Mascota");
            } else {
                res.send(data);
            }
        }
    );
});

export default appPrestamosRealizados;