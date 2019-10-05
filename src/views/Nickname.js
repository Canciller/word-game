import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { GameConsumer } from 'context/GameContext';

import './Nickname.scss';

export default class Nickname extends React.Component
{
    render() {
        const { history } = this.props;

        return (
            <GameConsumer>
                { ({ player, update_player }) => (
                    <div className='container'>
                        <Menu
                            title={
                                <h1>Change nickname</h1>
                            }
                            content={
                                <Textfield
                                    onChange={ e => player.name = e.target.value }
                                    onEnterPress={ e => player.save(() => update_player(() => history.goBack())) }
                                    label='Nickname'
                                    placeholder={ player.name }
                                    autoFocus
                                    topGutter
                                />
                            }
                            actions={
                                <React.Fragment>
                                    <Button
                                        onClick={ e => player.save(() => {
                                            update_player(() => history.goBack())
                                        }) }
                                        verticalGutters
                                        fullWidth
                                        type='success'
                                    >
                                        Confirm
                                    </Button>
                                <Button
                                    onClick={ e => history.goBack() }
                                    fullWidth
                                    type='error'
                                >
                                    Cancel
                                </Button>
                            </React.Fragment>
                            }
                        />
                    </div>
                )}
            </GameConsumer>
        )
    }
}
