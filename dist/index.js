"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiService_1 = __importDefault(require("./services/ApiService"));
(0, ApiService_1.default)('/users').then((data) => {
    console.log(data);
});
//# sourceMappingURL=index.js.map