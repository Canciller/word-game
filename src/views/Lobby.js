import React from 'react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';
import Button from 'components/Button';

import { PlayerConsumer } from 'context/PlayerContext';

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
                    actions={
                        <React.Fragment>
                            <Button
                                fullWidth
                                to='/lobby/create'
                                autoFocus
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
