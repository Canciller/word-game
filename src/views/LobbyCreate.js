import React from 'react';
import { Link } from 'react-router-dom';

import { withToastManager } from 'react-toast-notifications';

import Menu from 'components/Menu';
import Button from 'components/Button';
import TextField from 'components/Textfield';

import { GameConsumer } from 'context/GameContext';

class LobbyCreate extends React.Component
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
                            <h1>Create a lobby</h1>
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
                                            onChange={ e => lobby.name = e.target.value }
                                            id='lobby-name'
                                            label='Lobby name'
                                            autoFocus
                                        >
                                        </TextField>
                                        <TextField
                                            onChange={ e => lobby.password = e.target.value }
                                            id='lobby-password'
                                            label='Lobby password'
                                            type='password'
                                            verticalGutter
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
                                            type='success'
                                            onClick={ e => game.create(err => {
                                                if(err) {
                                                    toastManager.add(
                                                        err.message,
                                                        { appearance: 'error', autoDismiss: true}
                                                    );
                                                } else history.push('/lobby/settings');
                                            }) }
                                        >
                                            Create
                                        </Button>
                                }
                            </GameConsumer>
                            <Button
                                fullWidth
                                type='error'
                                to='/lobby'
                                className='Button-cancel'
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

export default withToastManager(LobbyCreate);
