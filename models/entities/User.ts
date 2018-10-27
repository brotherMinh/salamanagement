export class User {
    private _id_user: String;
    public get id_user(): String {
        return this._id_user;
    }
    public set id_user(value: String) {
        this._id_user = value;
    }
    private _id_facebook: String;
    public get id_facebook(): String {
        return this._id_facebook;
    }
    public set id_facebook(value: String) {
        this._id_facebook = value;
    }
    private _id_google: String;
    public get id_google(): String {
        return this._id_google;
    }
    public set id_google(value: String) {
        this._id_google = value;
    }
    private _userName: String;
    public get userName(): String {
        return this._userName;
    }
    public set userName(value: String) {
        this._userName = value;
    }
    private _password: String;
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }
    private _salt: String;
    public get salt(): String {
        return this._salt;
    }
    public set salt(value: String) {
        this._salt = value;
    }
    private _fullname: String;
    public get fullname(): String {
        return this._fullname;
    }
    public set fullname(value: String) {
        this._fullname = value;
    }
    private _birthday: String;
    public get birthday(): String {
        return this._birthday;
    }
    public set birthday(value: String) {
        this._birthday = value;
    }
    private _phoneNumber: String;
    public get phoneNumber(): String {
        return this._phoneNumber;
    }
    public set phoneNumber(value: String) {
        this._phoneNumber = value;
    }
    private _email: String;
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }

    constructor(_id_user: String, _id_facebook: String, _id_google: String, _userName: String, _password: String, 
        _salt: String, _fullname: String, _birthday: String, _phoneNumber: String, _email: String,){
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