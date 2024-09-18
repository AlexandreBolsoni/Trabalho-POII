"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContainerContent {
    constructor() {
        this._content = [];
    }
    get content() {
        return this._content;
    }
    add(item) {
        console.log('Trying to add new item...');
        this._content.push(item);
    }
    remove(item) {
        console.log('Trying to remove item...');
        this._content = this._content.filter(i => i !== item);
    }
    getAll() {
        return this._content;
    }
    search(searchArguments) {
        // Mapear e filtrar resultados válidos (não undefined)
        const results = this._content.filter((content) => content.search(searchArguments) !== undefined);
        if (results.length > 0) {
            return results;
        }
        else {
            return undefined;
        }
    }
    searchById(id) {
        return this._content.filter((content) => content.id === id);
    }
    toString() {
        return this._content.map(item => item.toString()).join('\n');
    }
}
exports.default = ContainerContent;
//# sourceMappingURL=ContainerContent.js.map