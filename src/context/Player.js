import _ from 'underscore'

const defaultUsername = 'guest';

export default class Player
{
    constructor(onChange) {
        this._onChangeCallback = onChange;
    }

    get name () {
        return this._name || defaultUsername;
    }

    set name (name) {
        this._newName = name;
        this._onChange();
    }

    _onChange(callback) {
        if(_.isFunction(this._onChangeCallback)) this._onChangeCallback(this, callback);
    }

    _verifiedName() {
        if(_.isString(this._newName) && this._newName !== '')
            return this._newName;

        if(_.isString(this._name) && this._name !== '')
            return this._name;

        return defaultUsername;
    }

    save(callback) {
        this._name = this._verifiedName();
        this._onChange(callback);
    }

    toJSON() {
        let { name } = this;
        return { name }
    }
}
