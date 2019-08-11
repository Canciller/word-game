import React from 'react';
import Lobby from './Lobby';

let LobbyContext  = React.createContext();

class LobbyProvider extends React.Component
{
    render() {
        return (
            <LobbyContext.Provider value={new Lobby()}>
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
