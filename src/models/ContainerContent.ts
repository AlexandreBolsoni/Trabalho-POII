import  ISearchable  from "./ISeachable";
import Content from "./Content";

class ContainerContent implements ISearchable {
  private _content: Content[] = [];

  get content(): Content[] {
    return this._content;
  }
  public add(item: Content): void {
    this._content.push(item);
  }


  public remove(item: Content): void {
    this._content = this._content.filter(i => i !== item);
  }

  public getAll(): Content[] {
    return this._content;
  }

  public search(searchArguments: string): ISearchable[] | undefined {
    const results = this._content.map( (content) => { content.search(searchArguments)}).filter( (item) => item !== undefined);
    if(results.length > 0){
      return results;
    }else{
      return undefined;
    }
  }

  public toString(): string {
    return this._content.map(item => item.toString()).join('\n');
  }
}

export default ContainerContent