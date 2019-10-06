import React from 'react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';
import Button from 'components/Button';
import TextField from 'components/Textfield';

import { withNotificationsContext } from 'context/NotificationsContext';
import withCompleteContext from 'helpers/withCompleteContext';

class LobbyCreate extends React.Component
{
    createLobby = () => {
        const {
            game, player, lobby,
            notifications,
            history
        } = this.props;

        game.createLobby(player.state, lobby.state, (error, state) => {
            if(error) notifications.error(error.message);
            else history.push('/lobby/settings');
        });
    }

    render() {
        const {
            player,
            lobby
        } = this.props;

        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Create a lobby</h1>
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

                    content={
                        <React.Fragment>
                            <TextField
                                onChange={e => lobby.setName(e.target.value)}
                                id='lobby-name'
                                label='Lobby name'
                                autoFocus
                                verticalGutters
                            >
                            </TextField>
                            <TextField
                                onChange={e => lobby.setPassword(e.target.value)}
                                id='lobby-password'
                                label='Lobby password'
                                type='password'
                            >
                            </TextField>
                        </React.Fragment>
                    }

                    actions={
                        <React.Fragment>
                            <Button
                                onClick={e => this.createLobby() }
                                type='success'
                                fullWidth
                                verticalGutters
                            >
                                Create
                            </Button>
                            <Button
                                type='error'
                                to='/lobby'
                                className='Button-cancel'
                                fullWidth
                            >
                                Cancel
                            </Button>
                        </React.Fragment>
                    } />
                </div>
        )
    }
}

export default withNotificationsContext(withCompleteContext(LobbyCreate));
