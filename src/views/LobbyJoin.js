import React from 'react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';
import Button from 'components/Button';
import TextField from 'components/Textfield';

import { UserConsumer } from 'context/UserContext';

class LobbyJoin extends React.Component
{
    render() {
        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Join a lobby</h1>
                            <UserConsumer>
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
                            </UserConsumer>
                        </React.Fragment>
                    }
                    content={
                        // TODO: Add autofocus on lobby-code textfield
                        <React.Fragment>
                            <TextField
                                id='lobby-code'
                                label='Lobby code'
                                autoFocus
                            >
                            </TextField>
                            <TextField
                                id='lobby-password'
                                label='Lobby password'
                                type='password'
                                verticalGutter
                            >
                            </TextField>
                        </React.Fragment>
                    }
                    actions={
                        <React.Fragment>
                            <Button
                                fullWidth
                                type='success'
                            >
                                Join
                            </Button>
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

export default LobbyJoin;
