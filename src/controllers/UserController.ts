import { User } from "../models/User";
import fetchData from "../services/ApiService";
import Company from "../models/Company";
import Address from "../models/Address";
import Comment from "../models/Comment";
import ContainerContent from "../models/ContainerContent";

import Post from "../models/Post";
class UserController {
  private _users: User[] = [];

  get users(): User[] {
    return this._users;
  }

  public async init(): Promise<void> {
    await this.fetchDataUsers();
  }
  private async fetchDataUsers(): Promise<void> {
    console.log('Seraching all content from API')
    // Busca todos os usuários da API e instancia eles no na Classe;
    const usersData: any = await fetchData("/users");
    usersData.forEach((user: any) => {
      const newUser = new User(
        user.id,
        user.name,
        user.username,
        new Address(
          user.address.street,
          user.address.suite,
          user.address.city,
          user.address.zipcode
        ),
        user.phone,
        user.website,
        new Company(
          user.company.name,
          user.company.catchPhrase,
          user.company.bs
        )
      );
      this._users.push(newUser);
    });

    // Agora busca todos os posts e instancia os posts e os comentários
    const postsData: any = await fetchData("/posts");
    const posts: Post[] = postsData.map((post: any) => {
      return new Post(post.userId, post.title, post.id, post.body);
    });

    const commentsData: any = await fetchData("/comments");
    const comments: Comment[] = commentsData.map((comment: any) => {
      return new Comment(
        comment.id,
        comment.postId,
        comment.email,
        comment.body
      );
    });

    // Associa os comentários aos posts
    comments.forEach((comment) => {
      posts.forEach((post) => {
        if (comment.postId === post.id) {
          post.addComment(comment);
        }
      });
    });

    // Associa os posts aos usuários
    this._users.forEach((user) => {
      posts.forEach((post) => {
        if (user.idUser === post.idUser) {
          user.userContent.add(post);
        }
      });
    });

    console.log('Users has been initialized! \n');
  }

  public add(user: User): void {
    this._users.push(user);
    console.log('User has been added!');
    console.log( this._users[this._users.length - 1] );
  }

  public remove(user: User): void {
    console.log('Trying to remove user...')
    this._users = this._users.filter((u) => u !== user);
  }

  public searchById(id: number): User | undefined {
    console.log('Searching user by id...')
    return this._users.find((user) => user.idUser === id);
  }

 
}

export default UserController;
