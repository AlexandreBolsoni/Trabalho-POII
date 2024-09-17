import ISearchable from './ISeachable';
import  Address  from './Address';
import  Company  from './Company';
import ContainerContent from './ContainerContent';

export  class User {
  private _idUser: number;
  private _name: string;
  private _username: string;
  private _address: Address;
  private _phone: string;
  private _website: string;
  private _company: Company;
  private _userContent: ContainerContent;

  constructor( idUser: number, name: string, username: string, address: Address, phone: string, website: string, company: Company) {
    this._idUser = idUser;
    this._name = name;
    this._username = username;
    this._address = address;
    this._phone = phone;
    this._website = website;
    this._company = company;
    this._userContent = new ContainerContent();

  }

  get idUser(): number {
    return this._idUser;
  }

  get name(): string {
    return this._name;
  }

  get username(): string {  
    return this._username;
  }

  get address(): Address {
    return this._address;
  }

  get phone(): string {
    return this._phone;
  }

  get website(): string { 
    return this._website;
  }

  get company(): Company {
    return this._company;
  }

  get userContent(): ContainerContent {
    return this._userContent;
  }

  set name(name: string) {
    this._name = name;
  }

  set username(username: string) {
    this._username = username;
  }

  set address(address: Address) {
    this._address = address;
  }

  set phone(phone: string) {
    this._phone = phone;
  }

  set website(website: string) {
    this._website = website;
  }

  set company(company: Company) {
    this._company = company;
  }

  set userContent(userContent: ContainerContent) {
    this._userContent = userContent;
  }


 /*search(searchTerm: string): ISearchable[] | null {
   if (this.name.includes(searchTerm) || this.username.includes(searchTerm)) {
     return [this];
   }
   return null;
 }*/

   public toString(): string {
    return `User: ${this.name}, Username: (${this.username}), (${this.address.toString()}), Phone: (${this.phone}), Website: (${this.website}), (${this.company.toString()}) ${this.userContent.toString()}`;
  }
}

export default User