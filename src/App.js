import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { UserContext } from './context';

import { Home, Play } from './views';

import './App.css';

function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/play' component={Play} />
        </Router>
    );
}

export default App;
