import { Libros } from '../../controller/validacionDto.js';
import "reflect-metadata";
import express from 'express';
import { plainToClass } from "class-transformer";

const middlewareLibros = express();
middlewareLibros.use((req, res, next) => {
try {
let data = plainToClass(Libros, req.body, {
    excludeExtraneousValues: true,
});
req.body = JSON.parse(JSON.stringify(data));
next();
} catch (error) {
res.status(error.status).send(error);
}
});

export default middlewareLibros;