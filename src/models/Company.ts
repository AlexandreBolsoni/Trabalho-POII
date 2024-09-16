export class Company {
    constructor(
      public name: string,
      public catchPhrase: string,
      public bs: string
    ) {}
  
    toString(): string {
      return `Company: ${this.name} (${this.catchPhrase})`;
    }
  }
  