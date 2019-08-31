import React from 'react';
import server from 'server';

import LobbyContext from 'context/LobbyContext';

export default class LobbyStatus extends React.Component
{
    static contextType = LobbyContext;

    state = {}

    componentDidMount() {
        server.socket.on('lobby:status', ({ code }) => {
            console.log(this.context.code = code);
        });
        server.socket.emit('lobby:status');
    }

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
}
