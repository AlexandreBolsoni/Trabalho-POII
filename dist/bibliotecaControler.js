"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaController = void 0;
const CatalogoLivro_1 = require("./modules/CatalogoLivro");
const CatalogoRevista_1 = require("./modules/CatalogoRevista");
class BibliotecaController {
    constructor() {
        this.catalogoLivros = new CatalogoLivro_1.CatalogoLivros();
        this.catalogoRevistas = new CatalogoRevista_1.CatalogoRevistas();
        this.membros = [];
        this.locacoes = [];
    }
    // Métodos relacionados a livros
    adicionarLivro(livro) {
        this.catalogoLivros.adicionarItem(livro);
    }
    buscarLivroPorCod(codItem) {
        return this.catalogoLivros.buscarItemPorCod(codItem);
    }
    // Métodos relacionados a revistas
    adicionarRevista(revista) {
        this.catalogoRevistas.adicionarItem(revista);
    }
    buscarRevistaPorCod(codItem) {
        return this.catalogoRevistas.buscarItemPorCod(codItem);
    }
    // Métodos relacionados a membros
    adicionarMembro(membro) {
        this.membros.push(membro);
    }
    buscarMembroPorCod(codMembro) {
        return this.membros.find(membro => membro.CodMembro === codMembro);
    }
    // Métodos relacionados a locações
    realizarLocacao(locacao) {
        this.locacoes.push(locacao);
        locacao.emprestar();
    }
    devolverItem(locacao) {
        locacao.devolver();
    }
    notificarAtrasoLocacao(locacao) {
        locacao.notificarAtraso();
    }
    listarLocacoes() {
        return this.locacoes;
    }
}
exports.BibliotecaController = BibliotecaController;
//# sourceMappingURL=bibliotecaControler.js.map