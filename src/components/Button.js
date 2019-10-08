import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

class Button extends React.Component
{
    constructor(props) {
        super(props);

        this.button = React.createRef();
    }

    componentDidMount() {
        if(this.props.autoFocus)
            ReactDOM.findDOMNode(this.button.current).focus();
    }

    render() {
        const {
            children,
            className,
            type, fullWidth,
            autoFocus,
            disabled,
            topGutter,
            bottomGutter,
            verticalGutters,
            ...other
        } = this.props;

        let Root = other.to ? Link : 'button';

        return (
            <Root
                className={
                    classNames(
                        'Button', className,
                        type ? `Button-${type}` : undefined,
                        { 'Button-fullWidth' : fullWidth },
                        { 'Button-topGutter' : topGutter },
                        { 'Button-bottomGutter' : bottomGutter },
                        { 'Button-verticalGutters' : verticalGutters },
                        { 'Button-disabled' : disabled }
                    )}
                disabled={disabled}
                ref={this.button}
                {...other}
            >
                {children}
            </Root>
        )
    }
}

export default Button;
