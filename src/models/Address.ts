export class Address {
    constructor(
      public street: string,
      public suite: string,
      public city: string,
      public zipcode: string
    ) {}
  
    toString(): string {
      return `Address: ${this.street}, ${this.city} - ${this.zipcode}`;
    }
  }
  