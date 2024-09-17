import fetchData from "../src/services/ApiService";
import UserController from "./controllers/UserController";
import Post from "./models/Post";
import ContainerContent from "./models/ContainerContent";
import User from "../src/models/User";
import Address from "./models/Address";
import Company from "./models/Company";


async function main() {
  const userController = new UserController();
  await userController.init();

  // Testando a exibição de todos os usuários e seus conteúdos
  console.log("\n--- Lista de Usuários e Conteúdos ---\n");
  userController.users.forEach((user) => {
    console.log(user.toString());  // Exibindo os detalhes de cada usuário
    user.userContent.content.forEach((content) => {
      console.log(content.toString());  // Exibindo o conteúdo associado
    });
  });

  // Buscando usuários por critério (exemplo: buscar pelo nome de usuário ou parte do nome)
  const searchTerm = "Leanne";  // Modifique conforme necessário
  console.log(`\n--- Resultados da busca por '${searchTerm}' ---\n`);
  const searchResults = userController.users.filter((user) => {
    return user.name.includes(searchTerm) || user.username.includes(searchTerm);
  });

  if (searchResults.length > 0) {
    searchResults.forEach((user) => console.log(user.toString()));
  } else {
    console.log("Nenhum usuário encontrado.");
  }

  // Adicionando um novo usuário
  const newUser = new User(
    11, // ID do novo usuário
    "New User", 
    "newuser123", 
    new Address("New Street", "Suite 10", "New City", "12345-678"),
    "999-9999", 
    "newwebsite.com", 
    new Company("New Company", "We innovate", "technology")
  );
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
}

// Executar a função principal
main().catch((error) => console.error(error));
