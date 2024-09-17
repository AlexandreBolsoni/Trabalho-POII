"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerContent = void 0;
class ContainerContent {
    constructor() {
        this.content = [];
    }
    add(item) {
        this.content.push(item);
    }
    remove(item) {
        this.content = this.content.filter(i => i !== item);
    }
    getAll() {
        return this.content;
    }
    search(searchArguments) {
        return this.content.filter(item => item.search(searchArguments));
    }
    toString() {
        return this.content.map(item => item.toString()).join('\n');
    }
}
exports.ContainerContent = ContainerContent;
//# sourceMappingURL=ContainerContent.js.map