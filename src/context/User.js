import Server from 'server';
import _ from 'underscore'

const default_username = 'guest';

class User
{
    constructor(name, lobby) {
        this._name = name ? name : default_username;
        this._lobby = lobby;

        this._register();
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._new_name = name;
    }

    get lobby () {
        return this._lobby;
    }

    set lobby (lobby) {
        this._new_lobby = lobby;
    }

    _validate_name() {
        const name = this._new_name;
        // TODO: Change this line for something less confusing
        this._name = _.isString(name) && name !== '' ? name : _.isString(this._name) ? this._name : default_username;
    }

    _validate_lobby() {
        this._lobby = this._new_lobby;
    }

    save() {
        this._validate_name();
        this._validate_lobby();

        this._register();
    }

    join() {
        Server.socket.emit('player:join', this.toJSON());
    }

    _register() {
        Server.socket.emit('player:register', this.toJSON())
    }

    toJSON() {
        let { _name, _lobby } = this;
        return {
            name: _name,
            lobby: _lobby
        }
    }
}

export default User;
