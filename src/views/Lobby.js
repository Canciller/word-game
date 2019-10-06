import React from 'react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';
import Button from 'components/Button';

import { withPlayerContext } from 'context/PlayerContext';

import './Lobby.scss'

class Lobby extends React.Component
{
    render() {
        const {
            player
        } = this.props;

        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Join or create a lobby</h1>
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
                        </React.Fragment>
                    }

                    actions={
                        <React.Fragment>
                            <Button
                                fullWidth
                                to='/lobby/create'
                                autoFocus
                                verticalGutters
                            >
                                Create
                            </Button>
                            <Button
                                fullWidth
                                to='/lobby/join'
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

export default withPlayerContext(Lobby);
