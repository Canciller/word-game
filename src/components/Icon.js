import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Icon.scss';

class Icon extends React.Component
{
    render() {
        const {
            className,
            root,
            name,
            size,
            ...other
        } = this.props;

        let fontSize = size ? parseInt(size) : 35,
            circleSize = fontSize + 15;

        let Root = root ? root : 'div';

        return (
            <Root
                className={ classNames('Icon', className) }
                style={{ width: circleSize, height: circleSize, fontSize: fontSize, padding: 0 }}
                {...other}
            >
                <FontAwesomeIcon icon={name} />
            </Root>
        )
    }
}

export default Icon;
