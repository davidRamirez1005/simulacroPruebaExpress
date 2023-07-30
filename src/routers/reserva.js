import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appReserva = express.Router();
appReserva.use(express.json());

/**
 *  ! Metodo GET Obtener todas las reservas realizadas con su fecha de reserva y estado.
 */
appReserva.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT reserva.fecha_reserva,reserva.estado from reserva;`,
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

export default appReserva;