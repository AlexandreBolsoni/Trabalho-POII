import { ISearchable } from './ISeachable';

export class Post implements ISearchable {
  constructor(
    public idPost: number,
    public idUser: number,
    public title: string,
    public body: string
  ) {}

search(searchTerm: string): ISearchable[] | null {
    if (searchTerm && (this.title.includes(searchTerm) || this.body.includes(searchTerm))) {
      return [this];
    }
    return null;
  }

  toString(): string {
    return `Post: ${this.title}\n${this.body}`;
  }
}
