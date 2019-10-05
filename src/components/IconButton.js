import React from 'react';
import classNames from 'classnames';

import Icon from 'components/Icon';
import Button from 'components/Button';

class IconButton extends React.Component
{
    render() {
        const {
            className,
            ...other
        } = this.props;

        return (
            <Icon
                root={Button}
                className={ classNames('IconButton', className) }
                {...other}
            />
        )
    }
}

export default IconButton;
