import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appUsuarioCorreo = express.Router();
appUsuarioCorreo.use(express.json());

/**
 *  ! Metodo GET Listar los usuarios y sus correos electrónicos.
 */
appUsuarioCorreo.get('/',authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT usuario.nombre, usuario.email 
        FROM usuario
        `,
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error al obtener los datos de usuario");
            } else {
                res.send(data);
            }
        }
    );
});

export default appUsuarioCorreo;