import { Expose, Transform} from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
/*
`id_libro` int(11) NOT NULL,
`id_autor` int(11) DEFAULT NULL,
`id_categoria` int(11) DEFAULT NULL,
`id_editorial` int(11) DEFAULT NULL,
`titulo` varchar(255) DEFAULT NULL,
`anio_publicacion` int(11) DEFAULT NULL,
`isbn` varchar(20) DEFAULT NULL,
`num_paginas` int(11) DEFAULT NULL,
`id_estado` int(11) DEFAULT NULL
*/
export class Libros {
    @Expose({ name: 'id_libro' })
    @IsDefined({message: () =>{ throw {status: 422, message: 'el parametro es obligatorio id_libro'}} })
    @IsNumber({}, {message: () =>{throw {status: 406, message: 'el formato no es un numero id_libro'}}})
    id_libro: number;

    @Expose({ name: 'id_autor' })
    @IsDefined({message: () =>{ throw {status: 422, message: 'el parametro es obligatorio id_autor'}} })
    @IsNumber({}, {message: () =>{throw {status: 406, message: 'el formato no es un numero id_autor'}}})
    id_autor: number; 

    @Expose({ name: 'id_categoria' })
    @IsDefined({message: () =>{ throw {status: 422, message: 'el parametro es obligatorio id_categoria'}} })
    @IsNumber({}, {message: () =>{throw {status: 406, message: 'el formato no es un numero id_categoria'}}})
    id_categoria: number;

    @Expose({ name: 'titulo' })
    titulo: string;

    @Expose({ name: 'anio_publicacion' })
    @IsNumber({}, {message: () =>{throw {status: 406, message: 'el formato no es un numero anio_publicacion'}}})
    anio_publicacion: number;

    @Expose({ name: 'isbn' })
    @IsDefined({message: () =>{ throw {status: 422, message: 'el parametro es obligatorio isbn'}} })
    @IsString({message: () =>{throw {status: 406, message: 'el formato no es un numero isbn'}}})
    isbn: string;

    @Expose({ name: 'num_paginas' })
    @IsNumber({}, {message: () =>{throw {status: 406, message: 'el formato no es un numero num_paginas'}}})
    num_paginas: number;

    @Expose({ name: 'id_estado' })
    @IsDefined({message: () =>{ throw {status: 422, message: 'el parametro es obligatorio id_estado'}} })
    @IsNumber({}, {message: () =>{throw {status: 406, message: 'el formato no es un numero id_estado'}}})
    id_estado: number;

    constructor(
      id_libro: number,
      id_autor: number, 
      id_categoria: number, 
      titulo: string = 'libro',
      anio_publicacion: number = 1,
      isbn: string,
      num_paginas: number,
      id_estado: number) {
      this.id_libro = id_libro;
      this.id_autor = id_autor;
      this.id_categoria = id_categoria;
      this.titulo = titulo;
      this.anio_publicacion = anio_publicacion;
      this.isbn = isbn;
      this.num_paginas = num_paginas;
      this.id_estado = id_estado;


    }
}