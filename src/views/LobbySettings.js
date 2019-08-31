import React from 'react';

import { PlayerConsumer } from 'context/PlayerContext';
import { LobbyConsumer } from 'context/LobbyContext';

function Setting(props) {
    const { children, name } = props;
    return (
        <p>
            <b>{name}:{' '}</b>
            {children}
        </p>
    )
}

export default class LobbyTest extends React.Component
{
    render() {
        return (
            <div className='container'>
                <h1>Lobby Testing</h1>
                    <LobbyConsumer>
                        { lobby => {
                            return (
                                <React.Fragment>
                                    <h2>Lobby</h2>
                                    <div>
                                        <Setting name='Code'>{lobby.id}</Setting>
                                        <Setting name='Name'>{lobby.name}</Setting>
                                        <Setting name='Password'>{lobby.password}</Setting>
                                    </div>
                                </React.Fragment>
                            )
                        } }
                    </LobbyConsumer>
            </div>
        );
    }
}
