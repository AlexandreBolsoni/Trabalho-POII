"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comment {
    constructor(idComment, postId, email, body) {
        this._idComment = idComment;
        this._postId = postId;
        this._email = email;
        this._body = body;
    }
    get idComment() {
        return this._idComment;
    }
    get postId() {
        return this._postId;
    }
    get email() {
        return this._email;
    }
    get body() {
        return this._body;
    }
    set body(body) {
        this._body = body;
    }
    set email(email) {
        this._email = email;
    }
    toString() {
        return `Comment: ${this.email}, Body: (${this.body})`;
    }
}
exports.default = Comment;
//# sourceMappingURL=Comment.js.map