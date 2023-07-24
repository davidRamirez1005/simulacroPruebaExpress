import { Router } from 'express'
import middlewareLibros from '../middleware/validarLibros.js'

const appLibros = Router()

appLibros.post('/', middlewareLibros, (req, res) => res.send(JSON.stringify(req.body)))

export default appLibros;