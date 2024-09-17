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

  async init(): Promise<void> {
    await this.fetchDataUsers();
  }
  async fetchDataUsers(): Promise<void> {
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

    // Agora busca todos os posts
    const postsData: any = await fetchData("/posts");
    const posts: Post[] = postsData.map((post: any) => {
      return new Post(post.userId, post.title, post.id, post.body);
    });

    // Buscando os comentarios dos posts
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
        if (comment.postId === post.idPost) {
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
  }

  public add(user: User): void {
    this._users.push(user);
  }

  public remove(id: number): void {
    this._users = this._users.filter((user) => user.idUser !== id);
  }
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

export default UserController;
