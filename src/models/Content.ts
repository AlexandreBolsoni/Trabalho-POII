import ISearchable from "./ISeachable";

abstract class Content implements ISearchable {
    protected _idUser: number;
    protected _title: string;
    protected _id : number;

    constructor(idUser: number, title: string, id: number) {
        this._idUser = idUser;
        this._title = title;
        this._id = id
    }

    get idUser(): number {
        return this._idUser;
    }

    get title(): string {
        return this._title;
    }

    get id(): number {
        return this._id;
    }

    set title(title: string) {
        this._title = title;
    }



    public toString(): string {
        return `Content: ${this.title}, User: (${this.idUser}, ${this.id})`;
    }

    abstract search(searchArguments: string): ISearchable[] | undefined;
}

export default Content;