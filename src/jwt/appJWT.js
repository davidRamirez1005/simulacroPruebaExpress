import express from 'express';
import { createJWT, verifyJWT } from './jwt.js';

const appJwt = express.Router();
appJwt.use(express.json());

appJwt.post('/', async (req, res) => {
    const { id, nombre } = req.body;
    const json = { id, nombre };
    try {
        const jwt = await createJWT(json);
        res.send({ jwt });
    } catch (error) {
        res.status(500).send({ error: "Error al crear el token JWT" });
    }
    });

    appJwt.get("/:ver", async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ token: ":(" });
    try {
        const jwtData = await verifyJWT(authorization);
        res.send(jwtData);
    } catch (error) {
        res.status(401).send({ token: "Algo salió mal :(" });
    }
});

export default appJwt
