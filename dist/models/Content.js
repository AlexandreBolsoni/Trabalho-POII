"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    constructor(idUser, title) {
        this._idUser = idUser;
        this._title = title;
    }
    get idUser() {
        return this.idUser;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    toString() {
        return `Content: ${this.title}, User: (${this.idUser})`;
    }
}
exports.default = Content;
//# sourceMappingURL=Content.js.map