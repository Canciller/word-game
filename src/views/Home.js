import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { GameConsumer } from 'context/GameContext';

import './Home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <GameConsumer>
                { ({ player }) => (
                    <div className='container'>
                        <Menu
                            title={
                                <h1>Choose a nickname to start playing!</h1>
                            }
                            content={
                                <Textfield
                                    onChange={ e => player.name = e.target.value }
                                    onEnterPress={ e => player.save(() => this.props.history.push('/lobby')) }
                                    label='Nickname'
                                    placeholder={ player.name }
                                />
                            }
                            actions={
                                <Button
                                    onClick={ e => player.save() }
                                    fullWidth
                                    to='/lobby'
                                    type='success'
                                >
                                    Play
                                </Button>
                            }
                        />
                    </div>
                ) }
            </GameConsumer>
        )
    }
}
