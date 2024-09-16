"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const Item_1 = require("./Item");
class Revista extends Item_1.Item {
    constructor(codItem, titulo, autor, ISBN, dataLancamento) {
        super(codItem, titulo, autor, ISBN);
        this.dataLancamento = dataLancamento;
    }
    getDataLancamento() {
        return this.dataLancamento;
    }
    setDataLancamento(dataLancamento) {
        this.dataLancamento = dataLancamento;
    }
    toString() {
        return `Revista:\nTítulo: ${this.Titulo}\nData de Lançamento: ${this.dataLancamento.toLocaleDateString()}\nAutor: ${this.Autor}\nISBN: ${this.isbn}`;
    }
}
exports.Revista = Revista;
//# sourceMappingURL=Revista.js.map