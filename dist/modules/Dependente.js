"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependente = void 0;
const Membro_1 = require("./Membro");
class Dependente extends Membro_1.Membro {
    constructor(codMembros, nome, statusAssociacao) {
        super(codMembros, nome, statusAssociacao.toString());
    }
}
exports.Dependente = Dependente;
//# sourceMappingURL=Dependente.js.map