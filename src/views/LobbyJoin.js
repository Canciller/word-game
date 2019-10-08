import React from 'react';
import { Link } from 'react-router-dom';

import { withNotificationsContext } from 'context/NotificationsContext';
import withCompleteContext from 'helpers/withCompleteContext';

import Menu from 'components/Menu';
import Button from 'components/Button';
import TextField from 'components/Textfield';

class LobbyJoin extends React.Component
{
    joinLobby = () => {
        const {
            game, player, lobby,
            notifications,
            history
        } = this.props;

        game.joinLobby(player.state, lobby.state, (error, state) => {
            if(error) notifications.error(error.message);
            else history.push('/lobby/settings');
        });
    }

    render() {
        const {
            player, lobby
        } = this.props;

        return (
            <div className='container'>
                <Menu
                    title={
                        <React.Fragment>
                            <h1>Join a lobby</h1>
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
                                onChange={e => lobby.setCode(e.target.value)}
                                id='lobby-code'
                                label='Lobby code'
                                autoFocus
                                verticalGutters
                            >
                            </TextField>
                            <TextField
                                onChange={e => lobby.setPassword(e.target.value)}
                                id='lobby-password'
                                label='Lobby password'
                                type='password'
                                placeholder='No password'
                            >
                            </TextField>
                        </React.Fragment>
                    }

                    actions={
                        <React.Fragment>
                            <Button
                                fullWidth
                                verticalGutters
                                type='success'
                                onClick={e => this.joinLobby()}
                            >
                                Join
                            </Button>
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

export default withNotificationsContext(withCompleteContext(LobbyJoin));
