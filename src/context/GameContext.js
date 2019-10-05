import React from 'react';
import _ from 'underscore'

import server from 'server';

import Player from './Player';
import Lobby from './Lobby';

let GameContext  = React.createContext();

class GameProvider extends React.Component
{
    _onChange = (object, callback) => this.setState({ object }, () => {
        if(_.isFunction(callback)) callback();
    });

    state = {
        player: new Player(this._onChange),
        lobby: new Lobby(this._onChange),
        gamestate: {}
    }

    create = callback => this._emit('game:create', callback);

    join = callback => this._emit('game:join', callback);

    update_player =  callback => this._emit('game:update:player', callback);

    _on(event, callback) {
        server.on(event, data => {
            if(_.isFunction(callback)) callback(data);
        });
    }

    _emit(event, callback) {
        const {
            player,
            lobby
        } = this.state;

        server.emit(event, { player, lobby }, ({ error, ...gamestate }) => {
            const callbackWrapper = () => {
                if(_.isFunction(callback)) callback(error, gamestate);
            }

            if(error) callbackWrapper();
            else this.setState({ gamestate }, callbackWrapper);
        });
    }

    componentDidMount() {
        this._on('game:state', gamestate => this.setState({ gamestate }));
    }

    render() {
        return (
            <GameContext.Provider value={{
                create: this.create,
                join: this.join,
                update_player: this.update_player,
                ...this.state
            }}>
                { this.props.children }
            </GameContext.Provider>
        )
    }
}

let GameConsumer = GameContext.Consumer;

export {
    GameProvider,
    GameConsumer
}

export default GameContext;
