"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoRevistas = void 0;
class CatalogoRevistas {
    constructor() {
        this.revistas = [];
    }
    adicionarItem(revista) {
        this.revistas.push(revista);
    }
    buscarItemPorCod(codItem) {
        return this.revistas.find(revista => revista.CodItem === codItem);
    }
}
exports.CatalogoRevistas = CatalogoRevistas;
//# sourceMappingURL=CatalogoRevista.js.map