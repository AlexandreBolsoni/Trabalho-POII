"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("./controllers/UserController"));
const userController = new UserController_1.default();
userController.init().then(() => 
//testando o controller e se todas as associações estao certas
userController.users.forEach((user) => {
    user.userContent.content.forEach((content) => {
        console.log(content.toString());
    });
}));
//# sourceMappingURL=index.js.map