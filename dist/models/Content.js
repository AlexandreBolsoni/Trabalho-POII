"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    constructor(idUser, title, id) {
        this._idUser = idUser;
        this._title = title;
        this._id = id;
    }
    get idUser() {
        return this._idUser;
    }
    get title() {
        return this._title;
    }
    get id() {
        return this._id;
    }
    set title(title) {
        this._title = title;
    }
    toString() {
        return `Content: ${this.title}, User: (${this.idUser}, ${this.id})`;
    }
}
exports.default = Content;
//# sourceMappingURL=Content.js.map