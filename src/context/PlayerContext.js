import React from 'react';
import _ from 'underscore'

let PlayerContext  = React.createContext();

const defaultPlayerName = 'guest';

class PlayerProvider extends React.Component
{
    state = {
        name: defaultPlayerName,
        ready: false
    }

    setSingle = (property, value, callback) => {
        this.setState({ [property] : value }, () => {
            if(_.isFunction(callback)) callback(this.state);
        });
    }

    set = (object, callback) => {
        this.setState(object, () => {
            if(_.isFunction(callback)) callback(this.state);
        });
    }

    render() {
        return (
            <PlayerContext.Provider value={{
                setName: (value, callback) => {
                    const regex = /((?:-*|_*)\d*\w+\d*(?:-*|_*).?)+/g;

                    let name = defaultPlayerName;
                    if(_.isString(value)) {
                        const match = value.match(regex);
                        if(match) name = match.join('');
                    };

                    this.setSingle('name', name, callback);
                },
                setReady: (value, callback) => this.setSingle('ready', value, callback),
                set: this.set,
                setSingle: this.setSingle,
                state: this.state,
                ...this.state
            }}>
                { this.props.children }
            </PlayerContext.Provider>
        )
    }
}


const withPlayerContext = Component => {
    return props => {
        return (
            <PlayerContext.Consumer>
                {context => {
                    return <Component {...props} player={context} />;
                }}
            </PlayerContext.Consumer>
        );
    }
}

let PlayerConsumer = PlayerContext.Consumer;

export {
    PlayerProvider,
    PlayerConsumer,
    withPlayerContext
}

export default PlayerContext;
