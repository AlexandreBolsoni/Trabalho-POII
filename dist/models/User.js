"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const ContainerContent_1 = __importDefault(require("./ContainerContent"));
class User {
    constructor(idUser, name, username, address, phone, website, company) {
        this._idUser = idUser;
        this._name = name;
        this._username = username;
        this._address = address;
        this._phone = phone;
        this._website = website;
        this._company = company;
        this._userContent = new ContainerContent_1.default();
    }
    get idUser() {
        return this._idUser;
    }
    get name() {
        return this._name;
    }
    get username() {
        return this._username;
    }
    get address() {
        return this._address;
    }
    get phone() {
        return this._phone;
    }
    get website() {
        return this._website;
    }
    get company() {
        return this._company;
    }
    get userContent() {
        return this._userContent;
    }
    set name(name) {
        this._name = name;
    }
    set username(username) {
        this._username = username;
    }
    set address(address) {
        this._address = address;
    }
    set phone(phone) {
        this._phone = phone;
    }
    set website(website) {
        this._website = website;
    }
    set company(company) {
        this._company = company;
    }
    set userContent(userContent) {
        this._userContent = userContent;
    }
    toString() {
        return `User: ${this.name}, Username: (${this.username}), (${this.address.toString()}), Phone: (${this.phone}), Website: (${this.website}), (${this.company.toString()}) ${this.userContent.toString()}`;
    }
}
exports.User = User;
exports.default = User;
//# sourceMappingURL=User.js.map