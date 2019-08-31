import React from 'react';
import Lobby from './Lobby';

let LobbyContext  = React.createContext();

class LobbyProvider extends React.Component
{
    state = {}

    render() {
        return (
            <LobbyContext.Provider value={new Lobby(this)}>
                { this.props.children }
            </LobbyContext.Provider>
        )
    }
}

let LobbyConsumer = LobbyContext.Consumer;

export {
    LobbyProvider,
    LobbyConsumer
}

export default LobbyContext;
