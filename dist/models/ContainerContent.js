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
        this._content.push(item);
    }
    remove(item) {
        this._content = this._content.filter(i => i !== item);
    }
    getAll() {
        return this._content;
    }
    search(searchArguments) {
        const results = this._content.map((content) => { content.search(searchArguments); }).filter((item) => item !== undefined);
        if (results.length > 0) {
            return results;
        }
        else {
            return undefined;
        }
    }
    toString() {
        return this._content.map(item => item.toString()).join('\n');
    }
}
exports.default = ContainerContent;
//# sourceMappingURL=ContainerContent.js.map