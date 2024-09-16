"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
class Locacao {
    constructor(codLocacao, membro, item, dataLocacao, dataPrevistaDevolucao) {
        this.codLocacao = codLocacao;
        this.membro = membro;
        this.item = item;
        this.dataLocacao = dataLocacao;
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
        this.dataDevolucao = null;
    }
    get CodLocacao() {
        return this.codLocacao;
    }
    set CodLocacao(codLocacao) {
        this.codLocacao = codLocacao;
    }
    get Membro() {
        return this.membro;
    }
    set Membro(membro) {
        this.membro = membro;
    }
    get Item() {
        return this.item;
    }
    set Item(item) {
        this.item = item;
    }
    get DataLocacao() {
        return this.dataLocacao;
    }
    set DataLocacao(dataLocacao) {
        this.dataLocacao = dataLocacao;
    }
    get DataPrevistaDevolucao() {
        return this.dataPrevistaDevolucao;
    }
    set DataPrevistaDevolucao(dataPrevistaDevolucao) {
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
    }
    get DataDevolucao() {
        return this.dataDevolucao;
    }
    set DataDevolucao(dataDevolucao) {
        this.dataDevolucao = dataDevolucao;
    }
    // Lógica para devolver o item
    devolver() {
        this.dataDevolucao = new Date(); // Define a data de devolução como a data atual
        console.log(`Item '${this.item.Titulo}' devolvido pelo membro '${this.membro.Nome}' na data ${this.dataDevolucao.toLocaleDateString()}.`);
    }
    // Lógica para emprestar o item
    emprestar() {
        console.log(`Item '${this.item.Titulo}' emprestado ao membro '${this.membro.Nome}' na data ${this.dataLocacao.toLocaleDateString()}. A devolução deve ocorrer até ${this.dataPrevistaDevolucao.toLocaleDateString()}.`);
    }
    // Lógica para notificar atraso na devolução
    notificarAtraso() {
        var _a, _b, _c, _d, _e;
        const dataAtual = new Date();
        if (this.dataDevolucao === null && this.dataPrevistaDevolucao !== undefined && dataAtual > this.dataPrevistaDevolucao) {
            const diasAtraso = Math.floor((dataAtual.getTime() - this.dataPrevistaDevolucao.getTime()) / (1000 * 3600 * 24));
            return `Atenção! O item '${(_a = this.item) === null || _a === void 0 ? void 0 : _a.Titulo}' está atrasado em ${diasAtraso} dias para devolução. Membro: '${(_b = this.membro) === null || _b === void 0 ? void 0 : _b.Nome}'.`;
        }
        else if (this.dataDevolucao !== null && this.dataDevolucao > this.dataPrevistaDevolucao) {
            const diasAtraso = Math.floor((this.dataDevolucao.getTime() - this.dataPrevistaDevolucao.getTime()) / (1000 * 3600 * 24));
            return `O item '${(_c = this.item) === null || _c === void 0 ? void 0 : _c.Titulo}' foi devolvido com ${diasAtraso} dias de atraso pelo membro '${(_d = this.membro) === null || _d === void 0 ? void 0 : _d.Nome}'.`;
        }
        else {
            return `Nenhum atraso na devolução do item '${(_e = this.item) === null || _e === void 0 ? void 0 : _e.Titulo}'.`;
        }
    }
    toString() {
        return `
        LOCAÇÃO \nCódigo: ${this.codLocacao}\nMembro: ${this.membro.Nome}\nItem: ${this.item.Titulo}\nData de Locação: ${this.dataLocacao.toLocaleDateString()}\nData Prevista para Devolução: ${this.dataPrevistaDevolucao.toLocaleDateString()}\n${this.dataDevolucao ? "Devolvido em: " + this.dataDevolucao.toLocaleDateString() : "Não Devolvido"}`;
    }
}
exports.Locacao = Locacao;
//# sourceMappingURL=Locacao.js.map