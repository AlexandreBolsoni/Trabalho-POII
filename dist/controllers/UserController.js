"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const ApiService_1 = __importDefault(require("../services/ApiService"));
const Company_1 = __importDefault(require("../models/Company"));
const Address_1 = __importDefault(require("../models/Address"));
const Comment_1 = __importDefault(require("../models/Comment"));
const Post_1 = __importDefault(require("../models/Post"));
class UserController {
    constructor() {
        this._users = [];
    }
    get users() {
        return this._users;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchDataUsers();
        });
    }
    fetchDataUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Seraching all content from API');
            // Busca todos os usuários da API e instancia eles no na Classe;
            const usersData = yield (0, ApiService_1.default)("/users");
            usersData.forEach((user) => {
                const newUser = new User_1.User(user.id, user.name, user.username, new Address_1.default(user.address.street, user.address.suite, user.address.city, user.address.zipcode), user.phone, user.website, new Company_1.default(user.company.name, user.company.catchPhrase, user.company.bs));
                this._users.push(newUser);
            });
            // Agora busca todos os posts e instancia os posts e os comentários
            const postsData = yield (0, ApiService_1.default)("/posts");
            const posts = postsData.map((post) => {
                return new Post_1.default(post.userId, post.title, post.id, post.body);
            });
            const commentsData = yield (0, ApiService_1.default)("/comments");
            const comments = commentsData.map((comment) => {
                return new Comment_1.default(comment.id, comment.postId, comment.email, comment.body);
            });
            // Associa os comentários aos posts
            comments.forEach((comment) => {
                posts.forEach((post) => {
                    if (comment.postId === post.id) {
                        post.addComment(comment);
                    }
                });
            });
            // Associa os posts aos usuários
            this._users.forEach((user) => {
                posts.forEach((post) => {
                    if (user.idUser === post.idUser) {
                        user.userContent.add(post);
                    }
                });
            });
            console.log('Users has been initialized! \n');
        });
    }
    add(user) {
        this._users.push(user);
        console.log('User has been added!');
        console.log(this._users[this._users.length - 1]);
    }
    remove(user) {
        console.log('Trying to remove user...');
        this._users = this._users.filter((u) => u !== user);
    }
    searchById(id) {
        console.log('Searching user by id...');
        return this._users.find((user) => user.idUser === id);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map