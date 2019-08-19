import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { UserProvider } from 'context/UserContext';
import { LobbyProvider } from 'context/LobbyContext';

import {
    Home,
    Lobby,
    LobbyCreate,
    LobbyJoin,
    Nickname
} from 'views';

import './App.css';

function App() {
    return (
        <Router>
            <UserProvider>
                <LobbyProvider>
                    <Route exact path='/' component={Home} />

                    <Route exact path='/lobby/create' component={LobbyCreate} />
                    <Route exact path='/lobby/join' component={LobbyJoin} />
                    <Route exact path='/lobby' component={Lobby} />

                    <Route exact path='/nickname' component={Nickname} />
                </LobbyProvider>
            </UserProvider>
        </Router>
    );
}

export default App;
