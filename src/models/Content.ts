import ISearchable from "./ISeachable";

abstract class Content implements ISearchable {
    protected _idUser: number;
    protected _title: string;

    constructor(idUser: number, title: string) {
        this._idUser = idUser;
        this._title = title;
    }

    get idUser(): number {
        return this._idUser;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }


    public toString(): string {
        return `Content: ${this.title}, User: (${this.idUser})`;
    }

    abstract search(searchArguments: string): ISearchable[] | undefined;
}

export default Content;