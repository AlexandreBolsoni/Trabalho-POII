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
const User_1 = __importDefault(require("../src/models/User"));
const Address_1 = __importDefault(require("./models/Address"));
const Company_1 = __importDefault(require("./models/Company"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const userController = new UserController_1.default();
        yield userController.init();
        // Testando a exibição de todos os usuários e seus conteúdos
        console.log("\n--- Lista de Usuários e Conteúdos ---\n");
        userController.users.forEach((user) => {
            console.log(user.toString()); // Exibindo os detalhes de cada usuário
            user.userContent.content.forEach((content) => {
                console.log(content.toString()); // Exibindo o conteúdo associado
            });
        });
        // Buscando usuários por critério (exemplo: buscar pelo nome de usuário ou parte do nome)
        const searchTerm = "Leanne"; // Modifique conforme necessário
        console.log(`\n--- Resultados da busca por '${searchTerm}' ---\n`);
        const searchResults = userController.users.filter((user) => {
            return user.name.includes(searchTerm) || user.username.includes(searchTerm);
        });
        if (searchResults.length > 0) {
            searchResults.forEach((user) => console.log(user.toString()));
        }
        else {
            console.log("Nenhum usuário encontrado.");
        }
        // Adicionando um novo usuário
        const newUser = new User_1.default(11, // ID do novo usuário
        "New User", "newuser123", new Address_1.default("New Street", "Suite 10", "New City", "12345-678"), "999-9999", "newwebsite.com", new Company_1.default("New Company", "We innovate", "technology"));
        userController.add(newUser);
        console.log("\n--- Após adicionar novo usuário ---\n");
        userController.users.forEach((user) => console.log(user.toString()));
        // Removendo um usuário pelo ID
        userController.remove(11);
        console.log("\n--- Após remover o usuário recém-adicionado ---\n");
        userController.users.forEach((user) => console.log(user.toString()));
        // Buscando e exibindo posts que contenham uma palavra específica no título ou no corpo
        const postSearchTerm = "quia"; // Modifique para testar outros termos
        console.log(`\n--- Buscando posts com o termo '${postSearchTerm}' ---\n`);
        userController.users.forEach((user) => {
            const foundPosts = user.userContent.search(postSearchTerm);
            if (foundPosts && foundPosts.length > 0) {
                foundPosts.forEach((post) => console.log(post.toString()));
            }
        });
    });
}
// Executar a função principal
main().catch((error) => console.error(error));
//# sourceMappingURL=index.js.map