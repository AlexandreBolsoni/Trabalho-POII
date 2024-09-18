import  ISearchable  from "./ISeachable";
import Content from "./Content";

class ContainerContent implements ISearchable {
  private _content: Content[] = [];

  get content(): Content[] {
    return this._content;
  }
  public add(item: Content): void {
    console.log('Trying to add new item...')
    this._content.push(item);
  }


  public remove(item: Content): void {
    console.log('Trying to remove item...')
    this._content = this._content.filter(i => i !== item);
  }

  public getAll(): Content[] {
    return this._content;
  }
   
  public search(searchArguments: string): ISearchable[] | undefined {
    // Mapear e filtrar resultados válidos (não undefined)
    const results : ISearchable[] = this._content.filter(
      (content) => content.search(searchArguments) !== undefined
    )
    if(results.length > 0){
      return results
    }else{
      return undefined
    }
  }

  public searchById(id: number): Content[] | undefined {
    return this._content.filter((content) => content.id === id);
  }


  public toString(): string {
    return this._content.map(item => item.toString()).join('\n');
  }

}

export default ContainerContent