import OpenSocket from 'socket.io-client';
import config from 'config';

export default OpenSocket(config.SOCKET_IO_URL)
