import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { UserConsumer } from 'context/UserContext';

import './Nickname.scss';

function Nickname() {
    return (
        <div className='container'>
            <Menu
                title={
                    <h1>Change nickname</h1>
                }
                content={
                    <UserConsumer>
                        { user => (
                            <Textfield
                                onChange={e => user.name = e.target.value}
                                label='Nickname'
                                placeholder={ user.name }
                            />
                        ) }
                    </UserConsumer>
                }
                actions={
                    <React.Fragment>
                        <UserConsumer>
                            { user => (
                                <Button
                                    onClick={e => user.save()}
                                    fullWidth
                                    to='/lobby'
                                    type='success'
                                >
                                    Confirm
                                </Button>
                            ) }
                        </UserConsumer>
                        <Button
                            className='Button-cancel'
                            fullWidth
                            to='/lobby'
                            type='error'
                        >
                            Cancel
                        </Button>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default Nickname;
