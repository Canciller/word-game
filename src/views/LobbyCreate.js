import React from 'react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';
import Button from 'components/Button';
import TextField from 'components/Textfield';

import { PlayerConsumer } from 'context/PlayerContext';
import { LobbyConsumer } from 'context/LobbyContext';

class LobbyCreate extends React.Component
{
    render() {
        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Create a lobby</h1>
                            <PlayerConsumer>
                                { user => (
                                    <p>
                                        Playing as{' '}
                                        <b>
                                            <Link
                                                to='/nickname'
                                                className='Lobby-nickname'
                                            >
                                                {user.name}
                                            </Link>
                                        </b>
                                    </p>
                                ) }
                            </PlayerConsumer>
                        </React.Fragment>
                    }
                    content={
                        <LobbyConsumer>
                            { lobby =>
                                    <React.Fragment>
                                        <TextField
                                            onChange={e => lobby.name = e.target.value }
                                            id='lobby-name'
                                            label='Lobby name'
                                            autoFocus
                                        >
                                        </TextField>
                                        <TextField
                                            onChange={e => lobby.password = e.target.value }
                                            id='lobby-password'
                                            label='Lobby password'
                                            type='password'
                                            verticalGutter
                                        >
                                        </TextField>
                                    </React.Fragment>
                            }
                        </LobbyConsumer>
                    }
                    actions={
                        <React.Fragment>
                            <LobbyConsumer>
                                { lobby =>
                                        <Button
                                            fullWidth
                                            type='success'
                                            onClick={e => lobby.create()}
                                            to='/lobby/settings'
                                        >
                                            Create
                                        </Button>
                                }
                            </LobbyConsumer>
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

export default LobbyCreate;
