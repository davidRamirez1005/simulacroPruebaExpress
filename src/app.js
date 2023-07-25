import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { servidor } from './config/database.js';
import appJwt from './jwt/appJWT.js';
import appAutores from './routers/autoresNacionalidad.js';
import appCategorias from './routers/categoriasdisponibles.js';
import appEditorales from './routers/editorialesDirecciones.js';
import appLibros from './routers/libros.js';
import appEstadosDesc from './routers/estadosdescripcion.js';
import apptituloAutorEditorial from './routers/tituloAutorEditorial.js';
import appPrestamosRealizados from './routers/prestamos.js';

dotenv.config();
const appExpress = express();
appExpress.use(express.json());


appExpress.use('/token',appJwt)
appExpress.use('/autores', appAutores)
appExpress.use('/categoria', appCategorias)
appExpress.use('/editoriales', appEditorales)
appExpress.use('/libros', appLibros)
appExpress.use('/estado', appEstadosDesc)
appExpress.use('/titulo', apptituloAutorEditorial)
appExpress.use('/prestamos', appPrestamosRealizados)






appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}/`);
});

export default appExpress;


