import React from 'react';

import './Menu.scss';

class Menu extends React.Component
{
    render() {
        const {
            title,
            content,
            actions
        } = this.props;

        return (
            <div className='Menu'>
                { title &&
                        <div className='Menu-title'>
                            { title }
                        </div>
                }
                { content &&
                        <div className='Menu-content'>
                            { content }
                        </div>
                }
                { actions &&
                        <div className='Menu-actions'>
                            { actions }
                        </div>
                }
            </div>
        )
    }
}

export default Menu;
