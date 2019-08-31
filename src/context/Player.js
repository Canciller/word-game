import server from 'server';
import _ from 'underscore'

import StateWrapper from './StateWrapper';

const default_username = 'guest';

class Player extends StateWrapper
{
    constructor(provider) {
        super(provider);
    }

    get name () {
        return this._state.name || default_username;
    }

    set name (name) {
        this._new_name = name;
    }

    get lobby () {
        return this._state.lobby;
    }

    set lobby (lobby) {
        this._new_lobby = lobby;
    }

    _verified_name() {
        if(_.isString(this._new_name) && this._new_name !== '')
            return this._new_name;

        if(_.isString(this._state.name) && this._state.name !== '')
            return this._state.name;

        return default_username;
    }

    _verified_lobby() {
        return this._new_lobby;
    }

    _save(callback) {
        this._set_state({
            name: this._verified_name(),
            lobby: this._verified_lobby()
        }, callback);
    }

    create() {
        this._save(() => {
            server.socket.emit('player:create', this.toJSON());
        });
    }

    update() {
        this._save(() => {
            server.socket.emit('player:update', this.toJSON());
        });
    }

    join() {
        this._save(() => {
            server.socket.emit('player:join', this.toJSON());
        });
    }

    toJSON() {
        let { name, lobby } = this._state;
        return {
            name,
            lobby
        }
    }
}

export default Player;
