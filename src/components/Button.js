import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

class Button extends React.Component
{
    render() {
        const {
            children,
            className,
            type, fullWidth,
            ...other
        } = this.props;

        let Root = other.to ? Link : 'button';

        return (
            <Root
                className={
                    classNames(
                        'Button', className,
                        type ? `Button-${type}` : undefined,
                        { 'Button-fullWidth' : fullWidth }
                    )}
                {...other}
            >
                {children}
            </Root>
        )
    }
}

export default Button;
