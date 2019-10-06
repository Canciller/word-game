import OpenSocket from 'socket.io-client';

import config from 'config';

const server =  OpenSocket(config.SOCKET_IO_URL);

const emit = (event, ...args) => {
    server.emit(event, ...args);
}

const on = (event, ...args) => {
    server.on(event, ...args);
}

export {
    emit,
    on
}

export default server;
