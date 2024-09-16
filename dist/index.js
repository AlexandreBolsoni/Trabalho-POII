"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotecaControler_1 = require("./bibliotecaControler");
const Livro_1 = require("./modules/Livro");
const Revista_1 = require("./modules/Revista");
const Locacao_1 = require("./modules/Locacao");
const Titular_1 = require("./modules/Titular");
const Dependente_1 = require("./modules/Dependente");
// Inicializando o controlador da biblioteca
const bibliotecaController = new bibliotecaControler_1.BibliotecaController();
// Criando alguns livros
const livro1 = new Livro_1.Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien", 9788578273696, "Fantasia");
const livro2 = new Livro_1.Livro(2, "1984", "George Orwell", 9780451524935, "Ficção Científica");
const livro3 = new Livro_1.Livro(3, "A Revolução dos Bichos", "George Orwell", 9780451526342, "Fábula Política");
const livro4 = new Livro_1.Livro(4, "O Pequeno Príncipe", "Antoine de Saint-Exupéry", 9788525057800, "Fábula");
const livro5 = new Livro_1.Livro(5, "Dom Quixote", "Miguel de Cervantes", 9780199537891, "Clássico");
const livro6 = new Livro_1.Livro(6, "O Pequeno Priêncipe", "Antoine de Saint-Exupéry", 9788525057800, "Ficção Científica");
const livro7 = new Livro_1.Livro(7, "Harry Potter e a Pedra Filosofal", "J.K. Rowling", 9788532510578, "Fantasia");
const livro8 = new Livro_1.Livro(8, "Harry Potter e a Camara Secreta", "J.K. Rowling", 9788532510585, "Fantasia");
const livro9 = new Livro_1.Livro(9, "Harry Potter e o Prisioneiro de Azkaban", "J.K. Rowling", 9788532510592, "Fantasia");
// Criando algumas revistas
const revista1 = new Revista_1.Revista(6, "National Geographic", "National Geographic Society", 9781426217777, new Date("2024-01-01"));
const revista2 = new Revista_1.Revista(7, "Scientific American", "Springer Nature", 9780385495325, new Date("2024-02-01"));
const revista3 = new Revista_1.Revista(8, "TIME", "Time Inc.", 9781618930037, new Date("2024-03-01"));
const revista4 = new Revista_1.Revista(9, "The New York Times", "The New York Times Company", 9781451649310, new Date("2024-04-01"));
const revista5 = new Revista_1.Revista(10, "The Guardian", "The Guardian", 9781449333330, new Date("2024-05-01"));
const revista6 = new Revista_1.Revista(11, "The Wall Street Journal", "The Wall Street Journal", 9781501175565, new Date("2024-06-01"));
// Adicionando livros ao catálogo
bibliotecaController.adicionarLivro(livro1);
bibliotecaController.adicionarLivro(livro2);
bibliotecaController.adicionarLivro(livro3);
bibliotecaController.adicionarLivro(livro4);
bibliotecaController.adicionarLivro(livro5);
bibliotecaController.adicionarLivro(livro6);
bibliotecaController.adicionarLivro(livro7);
bibliotecaController.adicionarLivro(livro8);
bibliotecaController.adicionarLivro(livro9);
// Adicionando revistas ao catálogo
bibliotecaController.adicionarRevista(revista1);
bibliotecaController.adicionarRevista(revista2);
bibliotecaController.adicionarRevista(revista3);
bibliotecaController.adicionarRevista(revista4);
bibliotecaController.adicionarRevista(revista5);
bibliotecaController.adicionarRevista(revista6);
// Criando titulares e dependentes
const dependente1 = new Dependente_1.Dependente(11, "Igor Gonçalves", 1);
const dependente2 = new Dependente_1.Dependente(12, "adrian", 1);
const dependente3 = new Dependente_1.Dependente(13, "pedro", 1);
const dependente4 = new Dependente_1.Dependente(14, "alexandre", 1);
const titular1 = new Titular_1.Titular(1, "Archimedes", 1, [dependente1, dependente2]);
const titular2 = new Titular_1.Titular(2, "Bruno", 1, [dependente3, dependente4]);
const titular3 = new Titular_1.Titular(3, "Milton", 1, []);
// Adicionando membros à biblioteca
bibliotecaController.adicionarMembro(titular1);
bibliotecaController.adicionarMembro(titular2);
bibliotecaController.adicionarMembro(titular3);
bibliotecaController.adicionarMembro(dependente1);
bibliotecaController.adicionarMembro(dependente2);
bibliotecaController.adicionarMembro(dependente3);
bibliotecaController.adicionarMembro(dependente4);
// Criando algumas locações
const locacao1 = new Locacao_1.Locacao(1, titular1, livro1, new Date("2024-01-10"), new Date("2024-01-20"));
const locacao2 = new Locacao_1.Locacao(2, titular2, livro2, new Date("2024-01-11"), new Date("2024-01-21"));
const locacao3 = new Locacao_1.Locacao(3, titular1, revista1, new Date("2024-01-12"), new Date("2024-01-22"));
const locacao4 = new Locacao_1.Locacao(4, titular3, livro3, new Date("2024-01-13"), new Date("2024-01-23"));
const locacao5 = new Locacao_1.Locacao(5, titular3, revista2, new Date("2024-01-14"), new Date("2024-01-24"));
const locacao6 = new Locacao_1.Locacao(6, titular2, revista3, new Date("2024-01-15"), new Date("2024-01-25"));
const locacao7 = new Locacao_1.Locacao(7, dependente1, revista4, new Date("2024-01-16"), new Date("2024-01-26"));
const locacao8 = new Locacao_1.Locacao(8, dependente2, revista5, new Date("2024-01-17"), new Date("2024-01-27"));
const locacao9 = new Locacao_1.Locacao(9, dependente3, revista6, new Date("2024-01-18"), new Date("2024-01-28"));
const locacao10 = new Locacao_1.Locacao(10, dependente4, livro4, new Date("2024-01-19"), new Date("2024-01-29"));
const locacao11 = new Locacao_1.Locacao(11, dependente4, livro5, new Date("2024-01-20"), new Date("2024-01-30"));
const locacao12 = new Locacao_1.Locacao(12, dependente3, livro6, new Date("2024-01-21"), new Date("2024-01-31"));
// Realizando as locações
bibliotecaController.realizarLocacao(locacao1);
bibliotecaController.realizarLocacao(locacao2);
bibliotecaController.realizarLocacao(locacao3);
bibliotecaController.realizarLocacao(locacao4);
bibliotecaController.realizarLocacao(locacao5);
bibliotecaController.realizarLocacao(locacao6);
bibliotecaController.realizarLocacao(locacao7);
bibliotecaController.realizarLocacao(locacao8);
bibliotecaController.realizarLocacao(locacao9);
bibliotecaController.realizarLocacao(locacao10);
bibliotecaController.realizarLocacao(locacao11);
bibliotecaController.realizarLocacao(locacao12);
// Devolvendo um item
locacao1.devolver();
// Notificando atrasos (assumindo que a data atual é após a data de devolução prevista)
console.log(locacao2.notificarAtraso());
// Exibindo as locações realizadas com `toString`
console.log("Locações realizadas:");
bibliotecaController.listarLocacoes().forEach(locacao => {
    console.log(locacao.toString());
});
//# sourceMappingURL=index.js.map