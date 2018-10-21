var User = /** @class */ (function () {
    function User(_id_user, _id_facebook, _id_google, _userName, _password, _salt, _fullname, _birthday, _phoneNumber, _email) {
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
    Object.defineProperty(User.prototype, "id_user", {
        get: function () {
            return this._id_user;
        },
        set: function (value) {
            this._id_user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id_facebook", {
        get: function () {
            return this._id_facebook;
        },
        set: function (value) {
            this._id_facebook = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id_google", {
        get: function () {
            return this._id_google;
        },
        set: function (value) {
            this._id_google = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "salt", {
        get: function () {
            return this._salt;
        },
        set: function (value) {
            this._salt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullname", {
        get: function () {
            return this._fullname;
        },
        set: function (value) {
            this._fullname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (value) {
            this._birthday = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
