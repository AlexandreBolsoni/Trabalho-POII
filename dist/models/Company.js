"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(name, catchPhrase, bs) {
        this._name = name;
        this._catchPhrase = catchPhrase;
        this._bs = bs;
    }
    get name() {
        return this._name;
    }
    get catchPhrase() {
        return this._catchPhrase;
    }
    get bs() {
        return this._bs;
    }
    set name(name) {
        this._name = name;
    }
    toString() {
        return `Company: ${this.name}, CatchPhrase: (${this.catchPhrase}), Bs: (${this.bs})`;
    }
}
exports.default = Company;
//# sourceMappingURL=Company.js.map