import fetchData from "../src/services/ApiService";
import UserController from "./controllers/UserController";
import Post from "./models/Post";
import ContainerContent from "./models/ContainerContent";
import User from "../src/models/User";
import Address from "./models/Address";
import Company from "./models/Company";
import Comment from "./models/Comment";

async function main() {
  const userController = new UserController();
  await userController.init();

  //Adicionando um novo usuario;
  const newUser: User = new User(
    11,
    "João da Silva",
    "joaoSilva",
    new Address("Rua das Laranjeiras", "123", "Cidade", "12345"),
    "123456789",
    "www.joao.com",
    new Company("Company Name", "Catch Phrase", "BS")
  );
  console.log("\n -- Trying to add new user... -- \n");
  userController.add(newUser);

  //Buscando um usuário pelo id;
  console.log("\n -- Trying to find user by id... -- \n");
  const user = userController.searchById(11);
  if (user) {
    console.log(user.name);
  } else {
    console.log("User not found");
  }

  //Adicionando um novo post;
  const newPost: Post = new Post(11, "Post 1", 1, "Body 1");
  const newPost2: Post = new Post(12, "Post 2", 2, "Body 2");
  console.log("\n -- Trying to add new post... -- \n");
  userController.searchById(11)?.userContent.add(newPost);
  userController.searchById(11)?.userContent.add(newPost2);

  console.log(userController.searchById(11)?.userContent.content);

  console.log("\n -- Trying to use search... -- \n");
  userController.users.forEach((user) => {
    const searchContent = user.userContent.search("ips");
    if (searchContent !== undefined) {
      console.log(searchContent);
    }
  });
  console.log("\n -- Finished... -- \n");

  console.log("\n -- Trying to add new comment... -- \n");
  const newComment: Comment = new Comment(1, 1, "Email 1", "Body 1");
  const userContent: any = userController
    .searchById(11)
    ?.userContent.searchById(1);
  userContent.forEach((item: any) => {
    if (item instanceof Post) {
        item.addComment(newComment);
      console.log("\n Adding comment... \n");
      console.log(item);
    } else {
      console.log("\n Post not found \n");
    }
  });

  console.log('\n -- Removing post... -- \n');
  userController.searchById(11)?.userContent.remove(newPost2);
  console.log(userController.searchById(11)?.userContent.content);

  console.log('\n -- Removing user... -- \n');
  userController.remove(newUser);
  console.log(userController.users);

  console.log('\n -- Finished... -- \n');
}

// Executar a função principal
main().catch((error) => console.error(error));
