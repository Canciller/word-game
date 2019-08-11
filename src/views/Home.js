import React from 'react';
import { Link } from 'react-router-dom';

import { UserConsumer } from 'context/UserContext';

import './Home.scss';

function Home() {
    return (
        <div
            id='Home'
            className='container'
        >
            <div className='dialog'>
                <div className='dialog-content'>
                    <h1 className='dialog-title'>
                        Choose a nickname to start playing!
                    </h1>
                    <div id='nickname-form'>
                        <UserConsumer>
                            { user => (
                                <input
                                    onChange={e => user.name = e.target.value}
                                    type='text'
                                    placeholder={user.name}
                                />
                            )}
                        </UserConsumer>
                    </div>
                </div>
                <div className='dialog-actions'>
                    <button className='dialog-action link'>
                        <Link to='/lobby'>
                            Play
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
