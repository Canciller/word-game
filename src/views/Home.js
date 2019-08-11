import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className='container'>
            <div className='dialog'>
                <div className='dialog-content'>
                    <h1>
                        Choose a nickname to start playing!
                    </h1>
                    <div id='nickname-form'>
                        <input placeholder='Nickname' type='text'/>
                    </div>
                </div>
                <div className='dialog-actions'>
                    <button className='dialog-action'>
                        <Link to='/play'>
                            Play
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
