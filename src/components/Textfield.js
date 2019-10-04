import React from 'react';

import classNames from 'classnames';
import _ from 'underscore';

import './Textfield.scss';

class Textfield extends React.Component
{
    onKeyPress = e => {
        const {
            onEnterPress,
            onKeyPress
        } = this.props;

        switch(e.key) {
            case 'Enter':
                if(_.isFunction(onEnterPress))
                    onEnterPress(e);
                break;
            default:
                if(_.isFunction(onKeyPress))
                    onKeyPress(e);
        }
    }

    render() {
        const {
            id, className,
            label,
            onEnterPress,
            topGutter,
            bottomGutter,
            verticalGutters,
            ...other
        } = this.props;

        return (
            <div
                className={
                    classNames(
                        className,
                        'Textfield',
                        { 'Textfield-topGutter' : topGutter },
                        { 'Textfield-bottomGutter' : bottomGutter },
                        { 'Textfield-verticalGutters' : verticalGutters }
                    )}
            >
                <label
                    className={
                        classNames(
                            'Textfield-label',
                            className ? `${className}-label` : undefined
                        )}
                    htmlFor={id}
                >
                    {label}
                </label>
                <input
                    className={
                        classNames(
                            'Textfield-input',
                            className ? `${className}-input` : undefined
                        )}
                    id={id}
                    type='text'
                    {...other}
                    onKeyPress={this.onKeyPress}
                />
            </div>
        )
    }
}

export default Textfield;
