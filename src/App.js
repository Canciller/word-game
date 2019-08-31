import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PlayerProvider } from 'context/PlayerContext';
import { LobbyProvider } from 'context/LobbyContext';

import {
    Home,
    Lobby,
    LobbyCreate,
    LobbyJoin,
    LobbySettings,
    Nickname
} from 'views';

import './App.css';

function App() {
    return (
        <Router>
            <PlayerProvider>
                <LobbyProvider>
                    <Route exact path='/' component={Home} />

                    <Route exact path='/lobby/create' component={LobbyCreate} />
                    <Route exact path='/lobby/join' component={LobbyJoin} />
                    <Route exact path='/lobby/settings' component={LobbySettings} />
                    <Route exact path='/lobby' component={Lobby} />

                    <Route exact path='/nickname' component={Nickname} />
                </LobbyProvider>
            </PlayerProvider>
        </Router>
    );
}

export default App;
