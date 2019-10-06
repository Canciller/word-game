import React from 'react';
import classNames from 'classnames';

import withCompleteContext from 'helpers/withCompleteContext';

import Button from 'components/Button';
import IconButton from 'components/IconButton';
import Icon from 'components/Icon';

import './LobbySettings.scss';

class LobbySettings extends React.Component
{
    changeNickname = () => this.props.history.push('/nickname');

    checkState = () => {
        const {
            game,
            history
        } = this.props;

        const {
            currentLobby,
            currentPlayer
        } = game.state;

        if(!currentPlayer || !currentLobby) history.push('/lobby');
    }

    componentDidMount() {
        this.checkState();
    }

    componentDidUpdate() {
        this.checkState();
    }

    render() {
        const {
            player,
            game
        } = this.props;

        const {
            currentLobby,
            currentPlayer
        } = game.state;

        if(!currentPlayer || !currentLobby) return <React.Fragment />

        const players = currentLobby.players;

        return (
            <div className='container LobbySettings'>
                <div className='LobbySettings-left'>
                    <div className='LobbySettings-gamemode'>
                        <div className='LobbySettings-gamemode-grid'>
                            <Button>
                                Word Bidding
                            </Button>
                            <Button>
                                Word Poker
                            </Button>
                        </div>
                    </div>
                    <div className='LobbySettings-extra'>
                        <div className='LobbySettings-icons'>
                            <IconButton name='cog' />
                            <IconButton name='question' />
                        </div>
                        { currentLobby.name && currentLobby.code &&
                            <div className='LobbySettings-info'>
                                <h1>
                                    <p>{currentLobby.name}</p>
                                    <span>#{currentLobby.code}</span>
                                </h1>
                            </div>
                        }
                    </div>
                </div>

                <div className='LobbySettings-right'>
                    <div className='LobbySettings-players'>
                        { players && Object.keys(players).map(playerId => {
                            const {
                                name,
                                leader,
                                ready,
                            } = players[playerId];

                            const isCurrentPlayer = playerId === currentPlayer.id;

                            return (
                                <Button
                                    key={playerId}
                                    onClick={e => isCurrentPlayer && this.changeNickname()}
                                    className={classNames(
                                        { 'LobbySettings-player-you' : isCurrentPlayer },
                                        'LobbySettings-player'
                                    )}
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
                            onClick={e => player.setReady(!currentPlayer.ready, updated => game.updatePlayer(updated))}
                            type={currentPlayer.ready ? 'error' : 'success'}
                            fullWidth
                        >
                            {currentPlayer.ready ? 'Not Ready' : 'Ready'}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withCompleteContext(LobbySettings);
