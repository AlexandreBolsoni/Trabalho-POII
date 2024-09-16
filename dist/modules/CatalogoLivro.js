"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoLivros = void 0;
class CatalogoLivros {
    constructor() {
        this.livros = [];
    }
    adicionarItem(livro) {
        this.livros.push(livro);
    }
    buscarItemPorCod(codItem) {
        return this.livros.find(livro => livro.CodItem === codItem);
    }
}
exports.CatalogoLivros = CatalogoLivros;
//# sourceMappingURL=CatalogoLivro.js.map