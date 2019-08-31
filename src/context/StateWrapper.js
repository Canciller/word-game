import _ from 'underscore'

export default class StateWrapper
{
    constructor(provider) {
        this._provider = provider;
    }

    get _state () {
        return this._provider.state;
    }

    set _state (object) {
        this._provider.setState(object);
    }

    _set_state(object, callback) {
        this._provider.setState(object, () => {
            if(_.isFunction(callback)) callback(object);
        });
    }
}
