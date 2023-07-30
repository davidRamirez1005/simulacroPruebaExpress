import { verifyJWT } from "./jwt.js";

const authenticateJWT = async (req, res, next) => {
const { authorization } = req.headers;

try {
if (!authorization) {
    return res.status(401).json({ error: "Token de autenticación no proporcionado" });
}
// Verificar el JWT utilizando la clave secreta
const jwtData = await verifyJWT(authorization);
req.jwtData = jwtData;
next();
} catch (error) {
res.status(401).json({ error: "Token de autenticación inválido o ha expirado" });
}
};

export default authenticateJWT;