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

    @Expose({ name: 'id_editorial' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id_editorial no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_editorial es obligatorio"}}})
    id_editorial: number;
    
    @Expose({ name: 'titulo' })
    @Transform(({ value }) => { if(/^[a-z A-Z]+$/.test(value)) return (value) ? value : "Libro" ; else throw {status: 406, message: "El formato del parametro titulo no es correcto"};}, { toClassOnly: true })
    titulo: string;

    @Expose({ name: 'anio_publicacion' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return (value) ? value : 2023 ; else throw {status: 406, message: "El formato del parametro anio_publicacion no es correcto"};}, { toClassOnly: true })
    anio_publicacion: number;

    @Expose({ name: 'isbn' })
    @Transform(({ value }) => { if(/^[0-9\\-]|undefined+$/.test(value)) return value ; else throw {status: 400, message: "El parametro codigo-biblioteca-isbn es obligatorio y no cumple con el formato solicitado"};}, { toClassOnly: true })
    isbn: string;

    @Expose({ name: 'num_paginas' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return (value) ? value : 0 ; else throw {status: 406, message: "El formato del parametro numero-paginas no es correcto"};}, { toClassOnly: true })
    num_paginas: number;

    @Expose({ name: 'id_estado' })
    @IsDefined({message: () =>{ throw {status: 422, message: 'el parametro es obligatorio id_estado'}} })
    @IsNumber({}, {message: () =>{throw {status: 406, message: 'el formato no es un numero id_estado'}}})
    id_estado: number;

    constructor(
      id_libro: number,
      id_autor: number, 
      id_categoria: number,
      id_editorial : number,
      titulo: string = 'libro',
      anio_publicacion: number = 1,
      isbn: string,
      num_paginas: number,
      id_estado: number) {
      this.id_libro = id_libro;
      this.id_autor = id_autor;
      this.id_categoria = id_categoria;
      this.id_editorial = id_editorial;
      this.titulo = titulo;
      this.anio_publicacion = anio_publicacion;
      this.isbn = isbn;
      this.num_paginas = num_paginas;
      this.id_estado = id_estado;


    }
}