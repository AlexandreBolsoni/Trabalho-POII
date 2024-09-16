"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Titular = void 0;
const Membro_1 = require("./Membro");
class Titular extends Membro_1.Membro {
    constructor(codMembro, nome, statusAssociacao, listaDependente) {
        super(codMembro, nome, statusAssociacao.toString());
        this.listaDependente = listaDependente;
    }
    getListaDependente() {
        return this.listaDependente;
    }
    setListaDependente(listaDependente) {
        this.listaDependente = listaDependente;
    }
}
exports.Titular = Titular;
//# sourceMappingURL=Titular.js.map