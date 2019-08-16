import React from 'react';

import User from './User';

let UserContext  = React.createContext();

class UserProvider extends React.Component
{
    render() {
        return (
            <UserContext.Provider value={new User()}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

let UserConsumer = UserContext.Consumer;

export {
    UserProvider,
    UserConsumer
}

export default UserContext;
