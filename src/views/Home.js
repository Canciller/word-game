import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { PlayerConsumer } from 'context/PlayerContext';

import './Home.scss';

function Home() {
    return (
        <div className='container'>
            <Menu
                title={
                    <h1>Choose a nickname to start playing!</h1>
                }
                content={
                    <PlayerConsumer>
                        { user => (
                            <Textfield
                                onChange={e => user.name = e.target.value}
                                label='Nickname'
                                placeholder={user.name}
                            />
                        ) }
                    </PlayerConsumer>
                }
                actions={
                    <PlayerConsumer>
                        { user => (
                            <Button
                                onClick={e => user.create()}
                                fullWidth
                                to='/lobby'
                                type='success'
                            >
                                Play
                            </Button>
                        ) }
                    </PlayerConsumer>
                }
            />
        </div>
    );
}

export default Home;
