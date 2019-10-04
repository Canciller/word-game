import React from 'react';
import { Link } from 'react-router-dom';

import { withToastManager } from 'react-toast-notifications';

import Menu from 'components/Menu';
import Button from 'components/Button';
import TextField from 'components/Textfield';

import { GameConsumer } from 'context/GameContext';

class LobbyJoin extends React.Component
{
    render() {
        const {
            toastManager,
            history
        } = this.props;

        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Join a lobby</h1>
                            <GameConsumer>
                                { ({ player }) => (
                                    <p>
                                        Playing as{' '}
                                        <b>
                                            <Link
                                                to='/nickname'
                                                className='Lobby-nickname'
                                            >
                                                {player.name}
                                            </Link>
                                        </b>
                                    </p>
                                ) }
                            </GameConsumer>
                        </React.Fragment>
                    }
                    content={
                        <GameConsumer>
                            { ({ lobby }) =>
                                    <React.Fragment>
                                        <TextField
                                            onChange={ e => lobby.code = e.target.value }
                                            id='lobby-code'
                                            label='Lobby code'
                                            autoFocus
                                            verticalGutters
                                        >
                                        </TextField>
                                        <TextField
                                            onChange={ e => lobby.password = e.target.value }
                                            id='lobby-password'
                                            label='Lobby password'
                                            type='password'
                                        >
                                        </TextField>
                                    </React.Fragment>
                            }
                        </GameConsumer>
                    }
                    actions={
                        <React.Fragment>
                            <GameConsumer>
                                { game =>
                                        <Button
                                            fullWidth
                                            verticalGutters
                                            type='success'
                                            onClick={ e => game.join(err => {
                                                if(err) {
                                                    toastManager.add(
                                                        err.message,
                                                        { appearance: 'error', autoDismiss: true}
                                                    );
                                                } else history.push('/lobby/settings');
                                            }) }
                                        >
                                            Join
                                        </Button>
                                }
                            </GameConsumer>
                            <Button
                                fullWidth
                                type='error'
                                to='/lobby'
                            >
                                Cancel
                            </Button>
                        </React.Fragment>
                    }
                />
            </div>
        )
    }
}

export default withToastManager(LobbyJoin);
