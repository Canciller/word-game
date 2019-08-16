import Server from 'server';

const default_username = 'guest';

class User
{
    constructor(name, lobby) {
        this._name = name || default_username;
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

    save() {
        this._name = this._new_name;
        this._lobby = this._new_lobby;

        this._register();
    }

    join() {
        Server.socket.emit('player:join', this.toJSON());
    }

    toJSON() {
        let { _name, _lobby } = this;
        return {
            name: _name,
            lobby: _lobby
        }
    }

    _register() {
        Server.socket.emit('player:register', this.toJSON())
    }
}

export default User;
