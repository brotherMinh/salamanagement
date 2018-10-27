"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    get id_user() {
        return this._id_user;
    }
    set id_user(value) {
        this._id_user = value;
    }
    get id_facebook() {
        return this._id_facebook;
    }
    set id_facebook(value) {
        this._id_facebook = value;
    }
    get id_google() {
        return this._id_google;
    }
    set id_google(value) {
        this._id_google = value;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get salt() {
        return this._salt;
    }
    set salt(value) {
        this._salt = value;
    }
    get fullname() {
        return this._fullname;
    }
    set fullname(value) {
        this._fullname = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        this._birthday = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    constructor(_id_user, _id_facebook, _id_google, _userName, _password, _salt, _fullname, _birthday, _phoneNumber, _email) {
        this._id_user = _id_user;
        this._id_facebook = _id_facebook;
        this._id_google = _id_google;
        this._userName = _userName;
        this._password = _password;
        this._salt = _salt;
        this._fullname = _fullname;
        this._birthday = _birthday;
        this._phoneNumber = _phoneNumber;
        this._email = _email;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map