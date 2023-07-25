var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';
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
    constructor(id_libro, id_autor, id_categoria, id_editorial, titulo = 'libro', anio_publicacion = 1, isbn, num_paginas, id_estado) {
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
__decorate([
    Expose({ name: 'id_libro' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el parametro es obligatorio id_libro' }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: 'el formato no es un numero id_libro' }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_libro", void 0);
__decorate([
    Expose({ name: 'id_autor' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el parametro es obligatorio id_autor' }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: 'el formato no es un numero id_autor' }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_autor", void 0);
__decorate([
    Expose({ name: 'id_categoria' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el parametro es obligatorio id_categoria' }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: 'el formato no es un numero id_categoria' }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_categoria", void 0);
__decorate([
    Expose({ name: 'id_editorial' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id_editorial no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id_editorial es obligatorio" }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_editorial", void 0);
__decorate([
    Expose({ name: 'titulo' }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return (value) ? value : "Libro";
    else
        throw { status: 406, message: "El formato del parametro titulo no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Libros.prototype, "titulo", void 0);
__decorate([
    Expose({ name: 'anio_publicacion' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return (value) ? value : 2023;
    else
        throw { status: 406, message: "El formato del parametro anio_publicacion no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Libros.prototype, "anio_publicacion", void 0);
__decorate([
    Expose({ name: 'isbn' }),
    Transform(({ value }) => { if (/^[0-9\\-]|undefined+$/.test(value))
        return value;
    else
        throw { status: 400, message: "El parametro codigo-biblioteca-isbn es obligatorio y no cumple con el formato solicitado" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Libros.prototype, "isbn", void 0);
__decorate([
    Expose({ name: 'num_paginas' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return (value) ? value : 0;
    else
        throw { status: 406, message: "El formato del parametro numero-paginas no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Libros.prototype, "num_paginas", void 0);
__decorate([
    Expose({ name: 'id_estado' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el parametro es obligatorio id_estado' }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: 'el formato no es un numero id_estado' }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_estado", void 0);
