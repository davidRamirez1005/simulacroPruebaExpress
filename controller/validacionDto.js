var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';
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
    constructor(id_libro, id_autor, id_categoria, titulo = 'libro', anio_publicacion = 1, isbn, num_paginas, id_estado) {
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
    Expose({ name: 'titulo' }),
    __metadata("design:type", String)
], Libros.prototype, "titulo", void 0);
__decorate([
    Expose({ name: 'anio_publicacion' }),
    IsNumber({}, { message: () => { throw { status: 406, message: 'el formato no es un numero anio_publicacion' }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "anio_publicacion", void 0);
__decorate([
    Expose({ name: 'isbn' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el parametro es obligatorio isbn' }; } }),
    IsString({ message: () => { throw { status: 406, message: 'el formato no es un numero isbn' }; } }),
    __metadata("design:type", String)
], Libros.prototype, "isbn", void 0);
__decorate([
    Expose({ name: 'num_paginas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: 'el formato no es un numero num_paginas' }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "num_paginas", void 0);
__decorate([
    Expose({ name: 'id_estado' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el parametro es obligatorio id_estado' }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: 'el formato no es un numero id_estado' }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_estado", void 0);
