import React from 'react';
import _ from 'underscore'

import { emit, on } from 'server';

let GameContext  = React.createContext();

class GameProvider extends React.Component
{
    state = {}

    deleteState = () => {
        let state = this.state;

        const keys = Object.keys(state);
        for(let i = 0; i < keys.length; ++i)
            delete state[keys[i]]

        this.setState(state);
    }

    updateState = (error, state, callback) => {
        const callable = _.isFunction(callback);

        if(error) return callable ? callback(error, null) : undefined;
        this.setState(state, () => callback ? callback(null, state) : undefined);
    }

    createLobby = (player, lobby, callback) => emit(
        'game:create:lobby',
        player, lobby,
        (error, state) => this.updateState(error, state, callback));

    joinLobby = (player, lobby, callback) => emit(
        'game:join:lobby',
        player, lobby,
        (error, state) => this.updateState(error, state, callback));

    updatePlayer = (player, callback) => emit(
        'game:update:player',
        player,
        (error, state) => this.updateState(error, state, callback));

    componentDidMount() {
        on('game:update', this.updateState);
        on('connect', this.deleteState);
    }

    render() {
        return (
            <GameContext.Provider value={{
                createLobby: this.createLobby,
                joinLobby: this.joinLobby,
                updatePlayer: this.updatePlayer,
                togglePlayerReady: this.togglePlayerReady,
                state: this.state
            }}>
                { this.props.children }
            </GameContext.Provider>
        )
    }
}

const withGameContext = Component => {
    return props => {
        return (
            <GameContext.Consumer>
                {context => {
                    return <Component {...props} game={context} />;
                }}
            </GameContext.Consumer>
        );
    };
};

let GameConsumer = GameContext.Consumer;

export {
    GameProvider,
    GameConsumer,
    withGameContext
}

export default GameContext;
