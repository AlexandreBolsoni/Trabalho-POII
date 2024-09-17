"use strict";
// axios em um arquivo JavaScript ou TypeScript. O axios é uma biblioteca muito popular para fazer requisições HTTP de forma simples e eficiente, permitindo interagir com APIs, servidores ou web services.
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
// No terminal, instale o axios via npm ou yarn, se ainda não estiver instalado:
// npm install axios
// Passo 2: Instalar os tipos do axios para TypeScript
// npm install @types/axios --save-dev
const apiURL = "https://jsonplaceholder.typicode.com";
function fetchData() {
    return __awaiter(this, arguments, void 0, function* (additionalPath = "") {
        const response = yield fetch(`${apiURL}/${additionalPath}`);
        return response.json();
    });
}
//import axios from 'axios';
/*import { User } from '../models/User';
import { Address } from '../models/Address';
import { Company } from '../models/Company';
import { Container } from '../models/Container';

export class ApiService {
  async getUsers(): Promise<User[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data.map((userData: any) => {
      const address = new Address(
        userData.address.street,
        userData.address.suite,
        userData.address.city,
        userData.address.zipcode
      );
      const company = new Company(
        userData.company.name,
        userData.company.catchPhrase,
        userData.company.bs
      );
      const userContent = new Container();
      return new User(
        userData.id,
        userData.name,
        userData.username,
        address,
        userData.phone,
        userData.website,
        company,
        userContent
      );
    });
  }
}
*/
exports.default = fetchData;
//# sourceMappingURL=ApiService.js.map