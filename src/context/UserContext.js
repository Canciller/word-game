import React from 'react';

let UserContext  = React.createContext();

class User
{
    constructor(name, id, lobby) {
        User.defaultUsername = 'guest';
        User.currentId = 0;

        this._name = name || User.defaultUsername;
        this._id = id || User.getNewId();
        this._lobby = lobby;
    }

    get name () {
        return this._name;
    }

    get nameDecorated () {
        if(this._id === 1);
        else if(this._id !== undefined)
            return (
                <b>
                    <span id='user'>
                        <span id='user-name'>
                            {this._name}
                        </span>
                        <span id='user-decoration'>#</span>
                        <span id='user-id'>
                            {this._id}
                        </span>
                    </span>
                </b>
            )
        return <b>{this.name}</b>
    }

    set name (name) {
        this._name = name.toString();
        if(this._name === undefined || this._name === '')
            this._name = User.defaultUsername;
    }

    get id () {
        return this._id;
    }

    set id (id) {
        this._id = id;
    }

    get lobby () {
        return this._lobby;
    }

    set lobby (lobby) {
        this._lobby = lobby;
    }

    // TODO: add server logic here to generate a new id
    static getNewId() {
        return ++User.currentId;
    }
}

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
