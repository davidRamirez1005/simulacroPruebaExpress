import { SignJWT, jwtVerify } from 'jose';
import dotenv from 'dotenv';

dotenv.config();

const createJWT = async (data) => {
const encoder = new TextEncoder();
const jwtConstructor = new SignJWT({ json: data });
const jwt = await jwtConstructor
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('30m')
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
return (jwt);
};

const verifyJWT = async (token) => {
try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(token, encoder.encode(process.env.JWT_PRIVATE_KEY));
    return jwtData;
} catch (error) {
    throw new Error("token invalido");
}
};

export { createJWT, verifyJWT };