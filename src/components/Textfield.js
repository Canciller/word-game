import React from 'react';
import classNames from 'classnames';

import './Textfield.scss';

class Textfield extends React.Component
{
    render() {
        const {
            id, className,
            label, verticalGutter,
            ...other
        } = this.props;

        return (
            <div
                className={classNames('Textfield', { 'Textfield-verticalGutter' : verticalGutter }, className)}
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
                />
            </div>
        )
    }
}

export default Textfield;
