import { User } from '../models/User';
import { ApiService } from '../services/ApiService';

export class UserController {
  private users: User[] = [];

  async fetchData(): Promise<void> {
    const apiService = new ApiService();
    const data = await apiService.getUsers();
    this.users = data;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(id: number): void {
    this.users = this.users.filter(user => user.idUser !== id);
  }

  searchUsers(criteria: string): User[] {
    return this.users.filter(user => user.search(criteria) !== null);
  }
}
