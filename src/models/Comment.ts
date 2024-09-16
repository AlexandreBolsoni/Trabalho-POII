export class Comment {
    constructor(
      public idComment: number,
      public idPost: number,
      public email: string,
      public body: string
    ) {}
  
    toString(): string {
      return `Comment: ${this.body} (${this.email})`;
    }
  }
  