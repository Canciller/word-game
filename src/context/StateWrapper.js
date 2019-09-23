import _ from 'underscore'

export default class StateWrapper
{
    constructor(provider, namespace) {
        this._provider = provider;
        this._namespace = namespace;
    }

    get state () {
        return this._namespace ? this._provider.state[this._namespace] : this._provider.state;
    }

    set state (object) {
        if(this._namespace)
            this._provider.setState({
                [this._namespace] : { ...this.state, ...object }
            });
        else this._provider.setState(object);
    }

    setState(object, callback) {
        const func = () => {
            if(_.isFunction(callback)) callback(object);
        }

        if(this._namespace)
            this._provider.setState({
                [this._namespace] : { ...this.state, ...object }
            }, func);
        else this._provider.setState(object, func);
    }
}
