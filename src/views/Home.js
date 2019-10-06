import React from 'react';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Textfield from 'components/Textfield';

import { withPlayerContext } from 'context/PlayerContext';

import './Home.scss';

class Home extends React.Component
{
    render() {
        const {
            player,
            history
        } = this.props;

        return (
            <div className='container'>
                <Menu
                    title={<h1>Choose a nickname to start playing!</h1>}

                    content={
                        <Textfield
                            id='nickname'
                            label='Nickname'

                            onChange={e => player.setName(e.target.value)}
                            onEnterPress={e => history.push('/lobby')}
                            placeholder={player.name}

                            verticalGutters
                        />
                    }

                    actions={
                        <Button
                            fullWidth
                            to='/lobby'
                            type='success'
                        >
                            Play
                        </Button>
                    }
                />
            </div>
        );
    }
}

export default withPlayerContext(Home);
