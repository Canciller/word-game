import React from 'react';
import classNames from 'classnames';

import { GameConsumer } from 'context/GameContext';

import Button from 'components/Button';
import IconButton from 'components/IconButton';
import Icon from 'components/Icon';

import './LobbySettings.scss';

export default class LobbySettings extends React.Component
{
    render() {
        const {
            history
        } = this.props;

        return (
            <GameConsumer>
                { ({ gamestate, player, update_player }) => {
                    let {
                        code,
                        name,
                        password,
                        players,
                        you
                    } = gamestate;

                    return (
                        <div className='container LobbySettings'>
                            <div className='LobbySettings-left'>
                                <div className='LobbySettings-gamemode'>
                                    <div className='LobbySettings-gamemode-grid'>
                                        <Button>
                                            Word Poker
                                        </Button>
                                        <Button>
                                            Word Bidding
                                        </Button>
                                    </div>
                                </div>
                                <div className='LobbySettings-extra'>
                                    <div className='LobbySettings-icons'>
                                        <IconButton name='cog' />
                                        <IconButton name='question' />
                                    </div>
                                    { name && code &&
                                        <div className='LobbySettings-info'>
                                            <h1>
                                                <p>{name}</p>
                                                <span>#{code}</span>
                                            </h1>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='LobbySettings-right'>
                                <div className='LobbySettings-players'>
                                    { players && Object.keys(players).map(id => {
                                        const {
                                            name,
                                            leader,
                                            ready,
                                        } = players[id];

                                        return (
                                            <Button
                                                key={id}
                                                onClick={e => {
                                                    if(id === you) history.push('/nickname');
                                                }}
                                                className={classNames({ 'LobbySettings-player-you' : id === you }, 'LobbySettings-player') }
                                            >
                                                <div className='LobbySettings-player-name'>
                                                    { ready ?
                                                    <Icon name='check' size={11} /> :
                                                    <Icon name='times' size={11} />
                                                    }
                                                    { name }
                                                </div>
                                                { leader && <Icon name='crown' size={11} /> }
                                            </Button>
                                        )
                                    }) }
                                </div>
                                <div className='LobbySettings-confirm'>
                                    <Button
                                        onClick={e => {
                                            player.ready = !player.ready;
                                            player.save(() => update_player());
                                        }}
                                        type={ player.ready ? 'error' : 'success' }
                                        fullWidth
                                    >
                                        { player.ready ? 'Not Ready' : 'Ready' }
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </GameConsumer>
        );
    }
}
