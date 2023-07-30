import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appLibrosReserva = express.Router();
appLibrosReserva.use(express.json());

/**
 *  ! Metodo GET Mostrar los libros que están en reserva actualmente
 */
appLibrosReserva.get('/', authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT libro.titulo,reserva.estado from libro
        INNER JOIN reserva ON libro.id_libro = reserva.id_libro
        WHERE reserva.estado= 'Confirmada'`,
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


export default appLibrosReserva;