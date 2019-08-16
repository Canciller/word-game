import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Menu from 'components/Menu';
import Button from 'components/Button';

import { UserConsumer } from 'context/UserContext';
import { LobbyConsumer } from 'context/LobbyContext';

import './Lobby.scss'

class Lobby extends React.Component
{
    render() {
        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Join or create a lobby</h1>
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
                    actions={
                        <React.Fragment>
                            <Button
                                fullWidth
                                to='/lobby/create'
                            >
                                Create
                            </Button>
                            <Button
                                fullWidth
                                to='/lobby/join'
                                className='Button-join'
                            >
                                Join
                            </Button>
                        </React.Fragment>
                    }
                />
            </div>
        )
    }
}

export default Lobby;
