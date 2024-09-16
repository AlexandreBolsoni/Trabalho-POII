import { ISearchable } from "./ISeachable";

export class Container {
  private content: ISearchable[] = [];

  add(item: ISearchable): void {
    this.content.push(item);
  }

  remove(item: ISearchable): void {
    this.content = this.content.filter(i => i !== item);
  }

  getAll(): ISearchable[] {
    return this.content;
  }

 search(searchTerm: string): ISearchable[] | null {
   return this.content.filter(item => item.search(searchTerm)) || null;
 }

  toString(): string {
    return this.content.map(item => item.toString()).join('\n');
  }
}
