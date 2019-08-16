import OpenSocket from 'socket.io-client';
import config from 'config';

let Server = {
    socket: OpenSocket(config.SOCKET_IO_URL)
}

export default Server;
