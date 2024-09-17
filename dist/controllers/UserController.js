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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
//import { ApiService } from '../services/ApiService';
class UserController {
    constructor() {
        this.users = [];
        /*
          add(user: User): void {
            this.users.push(user);
          }
        
          remove(id: number): void {
            this.users = this.users.filter(user => user._idUser !== id);
          }
        
          searchUsers(criteria: string): User[] {
            return this.users.filter(user => user.search(criteria) !== null);
          }
          */
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            // const apiService = new ApiService();
            //const data = await apiService.getUsers();
            //this.users = data;
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map