import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { withGameContext } from 'context/GameContext';
import { withPlayerContext } from 'context/PlayerContext';

import './Nickname.scss';

class Nickname extends React.Component
{
    state = {}

    setNickname = name => this.setState({ name });

    updateNickname = () => {
        const {
            game,
            player,
            history
        } = this.props;

        player.setName(this.state.name,
            updated => game.updatePlayer(updated,
                () => history.goBack()));
    }

    render() {
        const {
            player,
            history
        } = this.props;

        return (
            <div className='container'>
                <Menu
                    title={<h1>Change nickname</h1>}

                    content={
                        <Textfield
                            label='Nickname'
                            id='nickname'

                            onChange={e => this.setNickname(e.target.value)}
                            onEnterPress={e => this.updateNickname()}
                            placeholder={player.name}

                            autoFocus
                            topGutter
                        />
                    }

                    actions={
                        <React.Fragment>
                            <Button
                                onClick={e => this.updateNickname()}
                                verticalGutters
                                fullWidth
                                type='success'
                            >
                                Confirm
                            </Button>
                            <Button
                                onClick={e => history.goBack()}
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

export default withGameContext(withPlayerContext(Nickname));
