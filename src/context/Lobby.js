import _ from 'underscore'

export default class Lobby
{
    constructor(onChange) {
        this._onChangeCallback = onChange;
    }

    _onChange() {
        if(_.isFunction(this._onChangeCallback)) this._onChangeCallback(this);
    }

    get code () {
        return this._code;
    }

    set code (code) {
        this._code = code;
        this._onChange();
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
        this._onChange();
    }

    get password () {
        return this._password;
    }

    set password (password) {
        this._password = password;
        this._onChange();
    }

    get players () {
        return this._players || {};
    }

    toJSON() {
        let { code, name, password, players } = this;
        return {
            code,
            name,
            password,
            players
        }
    }
}
