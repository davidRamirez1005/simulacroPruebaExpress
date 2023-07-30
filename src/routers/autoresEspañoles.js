import express from 'express';
import con from '../config/database.js';
import dotenv from 'dotenv';
import authenticateJWT from '../jwt/autenticate.js';

dotenv.config();

const appAutoresEspañoles = express.Router();
appAutoresEspañoles.use(express.json());

/**
 *  ! Metodo GET Listar los autores de nacionalidad española
 */
appAutoresEspañoles.get('/', authenticateJWT, async (req, res) => {
    con.query(
        /* sql */`
        SELECT * from autor
        WHERE autor.nacionalidad= 'Ruso'`,
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


export default appAutoresEspañoles;