import React from 'react';

import { GameConsumer } from 'context/GameContext';

import './LobbySettings.scss';

export default class LobbySettings extends React.Component
{
    render() {
        return (
            <GameConsumer>
                { ({ gamestate }) => {
                    const {
                        code,
                        name,
                        password,
                        players
                    } = gamestate;

                    return (
                        <div className='container LobbySettings'>
                            <p className='Lobby-code'>
                                { code }
                            </p>
                            { name &&
                                <p>
                                    { `Name: ${name}` }
                                </p>
                            }
                            { password &&
                                <p>
                                    { `Password: ${password}` }
                                </p>
                            }
                            <br/>
                            { players &&
                                <div className='Lobby-players'>
                                    <h4>Players</h4>
                                    { Object.keys(players).map(id => {
                                        let { name } = players[id];
                                        return (
                                            <p key={id} className='Lobby-player'>
                                                <span className='Lobby-player-id'>{ id }</span>
                                                {` `}
                                                <span className='Lobby-player-nickname'>{ name }</span>
                                            </p>
                                        )
                                    }) }
                                </div>
                            }
                        </div>
                    )
                }}
            </GameConsumer>
        );
    }
}
