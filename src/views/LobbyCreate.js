import React from 'react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';
import Button from 'components/Button';
import TextField from 'components/Textfield';

import { UserConsumer } from 'context/UserContext';

class LobbyCreate extends React.Component
{
    render() {
        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Create a lobby</h1>
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
                        // TODO: Add autofocus on lobby-name textfield
                        <React.Fragment>
                            <TextField
                                id='lobby-name'
                                label='Lobby name'
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
                                Create
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

export default LobbyCreate;
