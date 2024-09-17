"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Content_1 = __importDefault(require("./Content"));
class Post extends Content_1.default {
    constructor(idUser, title, idPost, body) {
        super(idUser, title);
        this._comments = [];
        this._idPost = idPost;
        this._body = body;
    }
    get idPost() {
        return this._idPost;
    }
    get body() {
        return this._body;
    }
    set body(body) {
        this._body = body;
    }
    get comments() {
        return this._comments;
    }
    get idUser() {
        return super.idUser;
    }
    get title() {
        return super.title;
    }
    set comments(comments) {
        this._comments = comments;
    }
    addComment(comment) {
        this._comments.push(comment);
    }
    removeComment(comment) {
        this._comments = this._comments.filter(item => item !== comment);
    }
    search(searchArguments) {
        if (this.title.includes(searchArguments) ||
            this.body.includes(searchArguments)) {
            return [this];
        }
        else {
            return undefined;
        }
    }
    toString() {
        return `Post: ${this.title}\n${this.body} \nComments: ${this.comments.map(item => item.toString()).join('\n')}`;
    }
}
exports.default = Post;
//# sourceMappingURL=Post.js.map