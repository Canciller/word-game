import React from 'react';
import classNames from 'classnames';

import { withGameContext } from 'context/GameContext';

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
            lobby,
            player
        } = game;

        if(!player || !lobby) history.push('/lobby');
    }

    componentDidMount() {
        this.checkState();
    }

    componentDidUpdate() {
        this.checkState();
    }

    render() {
        const {
            game
        } = this.props;

        const {
            lobby,
            player,
            gamemodeVoted,
            votes,
            gamemodes,
        } = game;

        if(!player || !lobby) return <React.Fragment />

        const players = lobby.players;

        return (
            <div className='container LobbySettings'>
                <div className='LobbySettings-left'>
                    <div className='LobbySettings-gamemode'>
                        <div className='LobbySettings-gamemode-grid'>
                            {gamemodes &&
                                gamemodes.map(mode => (
                                    <Button
                                        className={classNames({
                                            'LobbySettings-gamemode-voted' : gamemodeVoted === mode
                                        })}
                                        onClick={e => game.gamemodeVote(mode)}
                                        key={mode}
                                    >
                                        {mode}
                                        {votes[mode] &&
                                            <div className='LobbySettings-gamemode-votes'>
                                                {votes[mode]}
                                            </div>
                                        }
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='LobbySettings-extra'>
                        <div className='LobbySettings-icons'>
                            <IconButton name='cog' />
                            <IconButton name='question' />
                        </div>
                        { lobby.name && lobby.code &&
                            <div className='LobbySettings-info'>
                                <h1>
                                    <p>{lobby.name}</p>
                                    <span>#{lobby.code}</span>
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

                            const isCurrentPlayer = playerId === player.id;

                            return (
                                <Button
                                    key={playerId}
                                    onClick={e => isCurrentPlayer && this.changeNickname()}
                                    type={ready ? 'success' : undefined }
                                    className={classNames(
                                        { 'LobbySettings-player-you' : isCurrentPlayer },
                                        { 'LobbySettings-player-ready' : ready },
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
                            onClick={e => game.togglePlayerReady() }
                            type={player.ready ? 'error' : 'success'}
                            fullWidth
                        >
                            {player.ready ? 'Not Ready' : 'Ready'}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withGameContext(LobbySettings);
