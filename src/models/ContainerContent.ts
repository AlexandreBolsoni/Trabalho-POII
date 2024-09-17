import  ISearchable  from "./ISeachable";
import Content from "./Content";

export class ContainerContent implements ISearchable {
  private content: Content[] = [];

  add(item: Content): void {
    this.content.push(item);
  }

  remove(item: Content): void {
    this.content = this.content.filter(i => i !== item);
  }

  getAll(): Content[] {
    return this.content;
  }

  search(searchArguments: string): ISearchable[] | undefined {
    return this.content.filter(item => item.search(searchArguments));
  }

  toString(): string {
    return this.content.map(item => item.toString()).join('\n');
  }
}
