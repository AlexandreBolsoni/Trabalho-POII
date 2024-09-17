import fetchData from "./services/ApiService";
import UserController from "./controllers/UserController";
import Post from "./models/Post";
import  ContainerContent from "./models/ContainerContent";
const userController = new UserController();
userController.init().then(() => 
    
    userController.users.forEach((user)=>{
        user.userContent.content.forEach((content)=>{
            console.log(content.toString());
        })
    })
);
