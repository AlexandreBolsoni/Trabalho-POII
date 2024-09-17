"use strict";
// axios em um arquivo JavaScript ou TypeScript. O axios é uma biblioteca muito popular para fazer requisições HTTP de forma simples e eficiente, permitindo interagir com APIs, servidores ou web services.
Object.defineProperty(exports, "__esModule", { value: true });
// No terminal, instale o axios via npm ou yarn, se ainda não estiver instalado:
// npm install axios
// Passo 2: Instalar os tipos do axios para TypeScript
// npm install @types/axios --save-dev
/*import axios from 'axios';
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})*/
const apiURL = "https://jsonplaceholder.typicode.com";
function fetchData(additionalPath = "") {
    return new Promise((resolve, reject) => {
        fetch(apiURL + additionalPath)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
}
exports.default = fetchData;
//# sourceMappingURL=ApiService.js.map