import { ISearchable } from './ISeachable';
import { Address } from './Address';
import { Company } from './Company';
import { Container } from './Container';

export class User implements ISearchable {
  constructor(
    public idUser: number,
    public name: string,
    public username: string,
    public address: Address,
    public phone: string,
    public website: string,
    public company: Company,
    public userContent: Container
  ) {}

 search(searchTerm: string): ISearchable[] | null {
   if (this.name.includes(searchTerm) || this.username.includes(searchTerm)) {
     return [this];
   }
   return null;
 }

  toString(): string {
    return `${this.name} (${this.username}) - ${this.phone}`;
  }
}
