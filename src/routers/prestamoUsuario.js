import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appPrestamoUsuario = express.Router();
appPrestamoUsuario.use(express.json());

/**
 *  ! Metodo GET Listar los préstamos realizados por un usuario (ejemplo: Juan Pérez).
 */
appPrestamoUsuario.get('/:usu', authenticateJWT, async (req, res) => {
    const usu = req.params.usu;
    con.query(
        /* sql */`
        SELECT usuario.*, prestamo.fecha_prestamo
        FROM prestamo
        INNER JOIN usuario ON prestamo.id_usuario = usuario.id_usuario
        WHERE usuario.nombre = ?`,
        [usu],
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


export default appPrestamoUsuario;