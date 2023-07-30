import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { servidor } from './config/database.js';
import appJwt from './jwt/appJWT.js';
import appAutores from './routers/autoresNacionalidad.js';
import appCategorias from './routers/categoriasdisponibles.js';
import appEditorales from './routers/editorialesDirecciones.js';
import appLibros from './routers/libros.js';
import appEstadosDesc from './routers/estadosdescripcion.js';
import appReserva from './routers/reserva.js';
import appPrestamosRealizados from './routers/prestamos.js';
import appLinrosDisponibles from './routers/librosDisponibles.js';
import applibrosPrestados from './routers/librosPrestados.js';
import appUsuarioCorreo from './routers/usuarioCorreo.js';
import appLibroAutorEspecifico from './routers/librosAutorEspecifico.js';
import appLibroCategoria from './routers/libroCategoria.js';
import appPrestamoUsuario from './routers/prestamoUsuario.js';
import appLibrosMas from './routers/librosConMas.js';
import appAutoresEspañoles from './routers/autoresEspañoles.js';
import appLibrosReserva from './routers/librosReserva.js';
import appLibroEditorial from './routers/librosCiertaEditorial.js';
import appPrestamosUsu from './routers/listarPrestamos.js';
import appTituloEspecifico from './routers/tituloEspecifico.js';

dotenv.config();
const appExpress = express();

/**
 * ? cuando cumple el limite de solicitudes y no ha acabado el tiempo debe esperar a que se cumpla el mismo, cuando se cumpla el tiempo debe esperar 3 segundos para volver a hacer una solicitud
 */
const limiter = rateLimit({
    windowMs: 3000, // 3 segundos - tiempo durante el cual se contabilizan las solicitudes
    max: 3, // número máximo de solicitudes permitidas
    statusCode: 429,
    message: 'Has excedido el límite de solicitudes, por favor intenta de nuevo más tarde :(',
});

appExpress.use(limiter);

appExpress.use(express.json());


appExpress.use('/token',appJwt)
appExpress.use('/autores', appAutores)
appExpress.use('/categoria', appCategorias)
appExpress.use('/editoriales', appEditorales)
appExpress.use('/estado', appEstadosDesc)
appExpress.use('/libros', appLibros)
appExpress.use('/prestamos', appPrestamosRealizados)
appExpress.use('/reservas', appReserva)
appExpress.use('/libDis', appLinrosDisponibles)
appExpress.use('/libPres', applibrosPrestados)
appExpress.use('/uscor', appUsuarioCorreo)
appExpress.use('/libAuEsp', appLibroAutorEspecifico)
appExpress.use('/libCate', appLibroCategoria)
appExpress.use('/presUsu', appPrestamoUsuario)
appExpress.use('/libMas', appLibrosMas)
appExpress.use('/autorEsp', appAutoresEspañoles)
appExpress.use('/libReserva', appLibrosReserva)
appExpress.use('/libEditorial', appLibroEditorial)
appExpress.use('/prestamoUsu', appPrestamosUsu)
appExpress.use('/tituloEspecifico', appTituloEspecifico)









appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}/`);
});

export default appExpress;


