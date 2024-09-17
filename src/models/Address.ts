class Address {
  private _street: string;
  private _suite: string;
  private _city: string;
  private _zipcode: string;
  constructor(street: string, suite: string, city: string, zipcode: string) {
    this._street = street;
    this._suite = suite;
    this._city = city;
    this._zipcode = zipcode;
  }

  get street(): string {
    return this._street;
  }

  get suite(): string {
    return this._suite;
  }

  get city(): string {
    return this._city;
  }

  get zipcode(): string {
    return this._zipcode;
  }

  set street(street: string) {
    this._street = street;
  }

  set suite(suite: string) {
    this._suite = suite;
  }

  set city(city: string) {
    this._city = city;
  }

  set zipcode(zipcode: string) {
    this._zipcode = zipcode;
  }

  public toString(): string {
    return `Address: ${this.street}, Suite: (${this.suite}), City: (${this.city}), Zipcode: (${this.zipcode})`;
  }
}

export default Address