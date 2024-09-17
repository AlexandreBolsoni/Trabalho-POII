class Company {
  private _name: string
  private _catchPhrase: string
  private _bs: string
    constructor(name: string, catchPhrase: string, bs: string) {
      this._name = name
      this._catchPhrase = catchPhrase
      this._bs = bs
    }

    get name(): string {
      return this._name;
    }

    get catchPhrase(): string {
      return this._catchPhrase;
    }

    get bs(): string {
      return this._bs;
    }

    set name(name: string) {
      this._name = name;
    }
  
    public toString(): string {
      return `Company: ${this.name}, CatchPhrase: (${this.catchPhrase}), Bs: (${this.bs})`;
    }
  }
  
  export default Company