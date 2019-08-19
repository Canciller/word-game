import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { UserConsumer } from 'context/UserContext';

import './Nickname.scss';

export default class Nickname extends React.Component
{
    render() {
        const { history } = this.props;

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
                                    autoFocus
                                />
                            ) }
                        </UserConsumer>
                    }
                    actions={
                        <React.Fragment>
                            <UserConsumer>
                                { user => (
                                    <Button
                                        onClick={e => {
                                            user.save()
                                            history.goBack()
                                        }}
                                        fullWidth
                                        type='success'
                                    >
                                        Confirm
                                    </Button>
                                ) }
                            </UserConsumer>
                            <Button
                                onClick={e => history.goBack() }
                                className='Button-cancel'
                                fullWidth
                                type='error'
                            >
                                Cancel
                            </Button>
                        </React.Fragment>
                    }
                />
            </div>
        )
    }
}
