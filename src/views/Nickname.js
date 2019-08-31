import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { PlayerConsumer } from 'context/PlayerContext';

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
                        <PlayerConsumer>
                            { user => (
                                <Textfield
                                    onChange={e => user.name = e.target.value}
                                    label='Nickname'
                                    placeholder={ user.name }
                                    autoFocus
                                />
                            ) }
                        </PlayerConsumer>
                    }
                    actions={
                        <React.Fragment>
                            <PlayerConsumer>
                                { user => (
                                    <Button
                                        onClick={e => {
                                            user.update()
                                            history.goBack()
                                        }}
                                        fullWidth
                                        type='success'
                                    >
                                        Confirm
                                    </Button>
                                ) }
                            </PlayerConsumer>
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
