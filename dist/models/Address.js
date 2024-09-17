"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(street, suite, city, zipcode) {
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
    }
    get street() {
        return this._street;
    }
    get suite() {
        return this._suite;
    }
    get city() {
        return this._city;
    }
    get zipcode() {
        return this._zipcode;
    }
    set street(street) {
        this._street = street;
    }
    set suite(suite) {
        this._suite = suite;
    }
    set city(city) {
        this._city = city;
    }
    set zipcode(zipcode) {
        this._zipcode = zipcode;
    }
    toString() {
        return `Address: ${this.street}, Suite: (${this.suite}), City: (${this.city}), Zipcode: (${this.zipcode})`;
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map