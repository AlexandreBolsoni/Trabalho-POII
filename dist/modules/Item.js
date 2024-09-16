"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(codItem, titulo, autor, ISBN) {
        this.codItem = codItem;
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
    }
    get CodItem() {
        return this.codItem;
    }
    set CodItem(codItem) {
        this.codItem = codItem;
    }
    get Titulo() {
        return this.titulo;
    }
    set Titulo(titulo) {
        this.titulo = titulo;
    }
    get Autor() {
        return this.autor;
    }
    set Autor(autor) {
        this.autor = autor;
    }
    get isbn() {
        return this.ISBN;
    }
    set isbn(isbn) {
        this.ISBN = isbn;
    }
}
exports.Item = Item;
//# sourceMappingURL=Item.js.map