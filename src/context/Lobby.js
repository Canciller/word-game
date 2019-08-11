import OpenSocket from 'socket.io-client';

import config from 'config';

class Lobby
{
    constructor(name, password, id) {
        Lobby.defaultName = 'untitled';
        Lobby.currentId = 0;

        this._name = name || Lobby.defaultName;
        this._password = password;
        this._id = id || Lobby.getNewId();
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
        if(this._name === undefined || this._name === '')
            this._name = Lobby.defaultName;
    }

    get id () {
        return this._id;
    }

    set id (id) {
        this._id = id;
    }

    get password () {
        return this._password;
    }

    set password (password) {
        this._password = password;
    }

    create(name, password) {
        this.name = name;
        this.password = password;

        this.connect();
    }

    connect() {
        let socket = this._socket = OpenSocket(config.SOCKET_IO_URL);
        socket.emit('lobby:connect', {
            name: this._name,
            password: this._password
        });
    }

    disconnect() {

    }

    start() {

    }

    // TODO: add server logic here to generate a new id
    static getNewId() {
        return ++Lobby.currentId;
    }
}

export default Lobby;
