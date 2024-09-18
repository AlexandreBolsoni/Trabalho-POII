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
const UserController_1 = __importDefault(require("./controllers/UserController"));
const Post_1 = __importDefault(require("./models/Post"));
const User_1 = __importDefault(require("../src/models/User"));
const Address_1 = __importDefault(require("./models/Address"));
const Company_1 = __importDefault(require("./models/Company"));
const Comment_1 = __importDefault(require("./models/Comment"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        const userController = new UserController_1.default();
        yield userController.init();
        //Adicionando um novo usuario;
        const newUser = new User_1.default(11, "João da Silva", "joaoSilva", new Address_1.default("Rua das Laranjeiras", "123", "Cidade", "12345"), "123456789", "www.joao.com", new Company_1.default("Company Name", "Catch Phrase", "BS"));
        console.log("\n -- Trying to add new user... -- \n");
        userController.add(newUser);
        //Buscando um usuário pelo id;
        console.log("\n -- Trying to find user by id... -- \n");
        const user = userController.searchById(11);
        if (user) {
            console.log(user.name);
        }
        else {
            console.log("User not found");
        }
        //Adicionando um novo post;
        const newPost = new Post_1.default(11, "Post 1", 1, "Body 1");
        const newPost2 = new Post_1.default(12, "Post 2", 2, "Body 2");
        console.log("\n -- Trying to add new post... -- \n");
        (_a = userController.searchById(11)) === null || _a === void 0 ? void 0 : _a.userContent.add(newPost);
        (_b = userController.searchById(11)) === null || _b === void 0 ? void 0 : _b.userContent.add(newPost2);
        console.log((_c = userController.searchById(11)) === null || _c === void 0 ? void 0 : _c.userContent.content);
        console.log("\n -- Trying to use search... -- \n");
        userController.users.forEach((user) => {
            const searchContent = user.userContent.search("ips");
            if (searchContent !== undefined) {
                console.log(searchContent);
            }
        });
        console.log("\n -- Finished... -- \n");
        console.log("\n -- Trying to add new comment... -- \n");
        const newComment = new Comment_1.default(1, 1, "Email 1", "Body 1");
        const userContent = (_d = userController
            .searchById(11)) === null || _d === void 0 ? void 0 : _d.userContent.searchById(1);
        userContent.forEach((item) => {
            if (item instanceof Post_1.default) {
                item.addComment(newComment);
                console.log("\n Adding comment... \n");
                console.log(item);
            }
            else {
                console.log("\n Post not found \n");
            }
        });
        console.log('\n -- Removing post... -- \n');
        (_e = userController.searchById(11)) === null || _e === void 0 ? void 0 : _e.userContent.remove(newPost2);
        console.log((_f = userController.searchById(11)) === null || _f === void 0 ? void 0 : _f.userContent.content);
        console.log('\n -- Removing user... -- \n');
        userController.remove(newUser);
        console.log(userController.users);
        console.log('\n -- Finished... -- \n');
    });
}
// Executar a função principal
main().catch((error) => console.error(error));
//# sourceMappingURL=index.js.map