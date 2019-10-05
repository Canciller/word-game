import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ToastProvider } from 'react-toast-notifications';

import { GameProvider } from 'context/GameContext';

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
            <ToastProvider>
                <GameProvider>
                    <Route exact path='/' component={Home} />

                    <Route exact path='/lobby/create' component={LobbyCreate} />
                    <Route exact path='/lobby/join' component={LobbyJoin} />
                    <Route exact path='/lobby/settings' component={LobbySettings} />
                    <Route exact path='/lobby' component={Lobby} />

                    <Route exact path='/nickname' component={Nickname} />
                </GameProvider>
            </ToastProvider>
        </Router>
    );
}

export default App;
