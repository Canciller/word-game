import React from 'react';

import Player from './Player';

let PlayerContext  = React.createContext();

class PlayerProvider extends React.Component
{
    state = {}

    render() {
        return (
            <PlayerContext.Provider value={new Player(this)}>
                { this.props.children }
            </PlayerContext.Provider>
        )
    }
}

let PlayerConsumer = PlayerContext.Consumer;

export {
    PlayerProvider,
    PlayerConsumer
}

export default PlayerContext;
