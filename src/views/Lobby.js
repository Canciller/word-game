import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { UserConsumer } from 'context/UserContext';
import { LobbyConsumer } from 'context/LobbyContext';

import './Lobby.scss'

class Lobby extends React.Component
{
    state = {}

    showDialogForm = action => {
        let dialogForm = null;

        switch(action) {
            case 'create':
                dialogForm = (
                    <React.Fragment>
                        <div className='textfield'>
                            <label htmlFor='lobby-name'>
                                Lobby name
                            </label>
                            <input
                                id='lobby-name'
                                type='text'
                            />
                        </div>
                        <div className='textfield'>
                            <label htmlFor='lobby-password'>
                                Lobby password
                            </label>
                            <input
                                id='lobby-password'
                                type='password'
                            />
                        </div>
                        <button>
                            Create
                        </button>
                    </React.Fragment>
                )
                break;
            case 'join':
                dialogForm = (
                    <LobbyConsumer>
                        { lobby => (
                            <React.Fragment>
                                <div className='textfield'>
                                    <label htmlFor='lobby-code'>
                                        Lobby
                                    </label>
                                    <input
                                        onChange={e => lobby.name = e.target.value}
                                        id='lobby-code'
                                        type='text'
                                    />
                                </div>
                                <div className='textfield'>
                                    <label htmlFor='lobby-password'>
                                        Lobby password
                                    </label>
                                    <input
                                        onChange={e => lobby.password = e.target.value}
                                        id='lobby-password'
                                        type='password'
                                    />
                                </div>
                                <button
                                    onClick={e => lobby.connect()}
                                >
                                    Join
                                </button>
                            </React.Fragment>
                        )}
                    </LobbyConsumer>
                )
                break;
            default: break;
        }

        this.setState({
            noDisplay: true,
            dialogForm
        });
    }

    hideDialogForm = () => {
        this.setState({
            noDisplay: false,
            dialogForm: null
        });
    }

    render() {
        const {
            noDisplay,
            dialogForm
        } = this.state;

        return (
            <div
                id='Lobby'
                className='container'
            >
                <div className='dialog'>
                    <div className='dialog-content'>
                        <div className='dialog-title'>
                            <h1>
                                Create or Join a lobby
                            </h1>
                            <p>
                                {'Playing as '}
                                <UserConsumer>
                                    { user => user.nameDecorated }
                                </UserConsumer>
                            </p>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            'dialog-actions',
                            { 'no-display' :  noDisplay }
                        )}
                    >
                        <button
                            onClick={e => this.showDialogForm('create')}
                            className='dialog-action'
                        >
                            Create
                        </button>
                        <button
                            onClick={e => this.showDialogForm('join')}
                            className='dialog-action'
                        >
                            Join
                        </button>
                        <button className='dialog-action link'>
                            <Link to='/'>
                                Change Nickname
                            </Link>
                        </button>
                    </div>
                    <div
                        className={classNames(
                            'dialog-form',
                            { 'no-display': !noDisplay }
                        )}
                    >
                        {dialogForm}
                        <button
                            onClick={e => this.hideDialogForm()}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lobby;
