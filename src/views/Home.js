import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { UserConsumer } from 'context/UserContext';

import './Home.scss';

function Home() {
    return (
        <div className='container'>
            <Menu
                title={
                    <h1>Choose a nickname to start playing!</h1>
                }
                content={
                    <UserConsumer>
                        { user => (
                            <Textfield
                                onChange={e => user.name = e.target.value}
                                label='Nickname'
                                placeholder={user.name}
                            />
                        ) }
                    </UserConsumer>
                }
                actions={
                    <UserConsumer>
                        { user => (
                            <Button
                                onClick={e => user.save()}
                                fullWidth
                                to='/lobby'
                                type='success'
                            >
                                Play
                            </Button>
                        ) }
                    </UserConsumer>
                }
            />
        </div>
    );
}

export default Home;
