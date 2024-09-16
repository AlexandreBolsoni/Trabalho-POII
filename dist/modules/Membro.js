"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Membro = void 0;
class Membro {
    constructor(codMembro, nome, statusAssociacao) {
        this.codMembro = codMembro;
        this.nome = nome;
        this.statusAssociacao = statusAssociacao;
    }
    get CodMembro() {
        return this.codMembro;
    }
    set CodMembro(codMembro) {
        this.codMembro = codMembro;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(nome) {
        this.nome = nome;
    }
    get StatusAssociacao() {
        return this.statusAssociacao;
    }
    set StatusAssociacao(statusAssociacao) {
        this.statusAssociacao = statusAssociacao;
    }
    toString() {
        return `Membro:\nCódigo: ${this.codMembro}\nNome: ${this.nome}\nStatus: ${this.statusAssociacao}`;
    }
}
exports.Membro = Membro;
//# sourceMappingURL=Membro.js.map