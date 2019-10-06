import React from 'react';
import _ from 'underscore'

let LobbyContext  = React.createContext();

class LobbyProvider extends React.Component
{
    state = {}

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
            <LobbyContext.Provider value={{
                setCode: (value, callback) => this.setSingle('code', value, callback),
                setPassword: (value, callback) => this.setSingle('password', value, callback),
                setName: (value, callback) => this.setSingle('name', value, callback),
                set: this.set,
                setSingle: this.setSingle,
                state: this.state,
                ...this.state
            }}>
                { this.props.children }
            </LobbyContext.Provider>
        )
    }
}


const withLobbyContext = Component => {
  return props => {
    return (
      <LobbyContext.Consumer>
        {context => {
          return <Component {...props} lobby={context} />;
        }}
      </LobbyContext.Consumer>
    );
  };
};

let LobbyConsumer = LobbyContext.Consumer;

export {
    LobbyProvider,
    LobbyConsumer,
    withLobbyContext
}

export default LobbyContext;
