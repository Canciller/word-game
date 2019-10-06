import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NotificationsProvider } from 'context/NotificationsContext';

import { GameProvider } from 'context/GameContext';
import { PlayerProvider } from 'context/PlayerContext';
import { LobbyProvider } from 'context/LobbyContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCog,
    faQuestion,
    faCrown,
    faCheck,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
    Home,
    Lobby,
    LobbyCreate,
    LobbyJoin,
    LobbySettings,
    Nickname,
} from 'views';

import './App.scss';

library.add(
    faCog,
    faQuestion,
    faCrown,
    faCheck,
    faTimes,
);

function App() {
    return (
        <Router>
            <NotificationsProvider>
                <PlayerProvider>
                    <LobbyProvider>
                        <GameProvider>
                            <Route exact path='/' component={Home} />

                            <Route exact path='/lobby/create' component={LobbyCreate} />
                            <Route exact path='/lobby/join' component={LobbyJoin} />
                            <Route exact path='/lobby/settings' component={LobbySettings} />
                            <Route exact path='/lobby' component={Lobby} />

                            <Route exact path='/nickname' component={Nickname} />
                        </GameProvider>
                    </LobbyProvider>
                </PlayerProvider>
            </NotificationsProvider>
        </Router>
    );
}

export default App;
