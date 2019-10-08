import React from 'react';
import _ from 'underscore'

import { emit, on } from 'server';
import gamemodes from 'gamemodes';

let GameContext  = React.createContext();

class GameProvider extends React.Component
{
    state = {}

    deleteState = () => {
        /*
        let state = this.state;

        const keys = Object.keys(state);
        for(let i = 0; i < keys.length; ++i)
            delete state[keys[i]]

        this.setState(state);
        */

        this.setState({
            player: undefined,
            lobby: undefined,
            gamemodeVoted: undefined,
            votes: {}
        });
    }

    updateState = (error, state, callback) => {
        const callable = _.isFunction(callback);

        if(error) return callable ? callback(error, null) : undefined;
        this.setState(state, () => callback ? callback(null, state) : undefined);
    }

    createLobby = (playerData, lobbyData, callback) => emit(
        'game:create:lobby',
        playerData, lobbyData,
        (error, state) => this.updateState(error, state, callback)
    );

    joinLobby = (playerData, lobbyData, callback) => emit(
        'game:join:lobby',
        playerData, lobbyData,
        (error, state) => this.updateState(error, state, callback)
    );

    updatePlayer = (playerData, callback) => emit(
        'game:update:player',
        playerData,
        (error, state) => this.updateState(error, state, callback)
    );

    startGame = () => {

    }

    gamemodeVote = (mode, callback) => emit(
        'game:gamemode:vote',
        mode,
        (error, state) => this.updateState(error, state, callback)
    );

    togglePlayerReady = () => {
        let player = this.state.player;
        player.ready = !player.ready;
        this.updatePlayer(player);
    }

    componentDidMount() {
        on('game:update', this.updateState);
        on('game:start', this.startGame);

        on('connect', this.deleteState);
    }

    render() {
        return (
            <GameContext.Provider value={{
                createLobby: this.createLobby,
                joinLobby: this.joinLobby,
                updatePlayer: this.updatePlayer,
                gamemodeVote: this.gamemodeVote,
                togglePlayerReady: this.togglePlayerReady,
                state: this.state,
                gamemodes: gamemodes,
                ...this.state
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
