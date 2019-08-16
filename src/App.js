import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { UserProvider } from 'context/UserContext';
import { LobbyProvider } from 'context/LobbyContext';

import { Home, Lobby, Nickname } from 'views';

import './App.css';

function App() {
    return (
        <Router>
            <UserProvider>
                <LobbyProvider>
                    <Route exact path='/' component={Home} />
                    <Route path='/lobby' component={Lobby} />
                    <Route path='/nickname' component={Nickname} />
                </LobbyProvider>
            </UserProvider>
        </Router>
    );
}

export default App;
