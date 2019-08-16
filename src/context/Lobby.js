import User from './User';

class Lobby
{
    constructor(name, password) {
        this._name = name;
        this._password = password;
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
    }

    get password () {
        return this._password;
    }

    set password (password) {
        this._password = password;
    }

    toJSON() {
        let { _name, _password } = this;
        return {
            name: _name,
            password: _password
        }
    }

    create() {
        User.socket.emit('lobby:create', this.toJSON());
    }

    connect() {
        User.socket.emit('lobby:connect', this.toJSON());
    }

    disconnect() {

    }

    start() {

    }
}

export default Lobby;
