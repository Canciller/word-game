import server from 'server';
import StateWrapper from './StateWrapper';

export default class Lobby extends StateWrapper
{
    constructor(provider) {
        super(provider);
    }

    get id () {
        return this._state.id;
    }

    set id (id) {
        this._state = { id };
    }

    get name () {
        return this._state.name;
    }

    set name (name) {
        this._state = { name };
    }

    get password () {
        return this._state.password;
    }

    set password (password) {
        this._state = { password };
    }

    get players () {
        return this._state.players || [];
    }

    create() {
        server.socket.emit('lobby:create', this.toJSON(), data => {
            this._state = data;
        });
    }

    toJSON() {
        let { id, name, password, players } = this._state;
        return {
            id: parseInt(id),
            name,
            password,
            players
        }
    }
}
