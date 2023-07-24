import { Libros } from "../../controller/validacionDto.js";
import "reflect-metadata";
import express from 'express';
import { plainToClass } from "class-transformer";

const middlewareLibros = express();
middlewareLibros.use(async(req, res, next) => {
try {
    let data = plainToClass(User, req.body, { excludeExtraneousValues: true });
    req.body = data;
    await validate(data);
    next();
} catch (err) {
res.status(err.status).json(err);
}
});

export default middlewareLibros;
