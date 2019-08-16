import React from 'react';

import './Dialog.scss';

class Dialog extends React.Component
{
    render() {
        const {
            title,
            message,
            actions
        } = this.props;

        return (
            <div className='Dialog'>
                <div className='Dialog-content'>
                    { title &&
                            <div className='Dialog-title'>
                                { title }
                            </div>
                    }
                    { message &&
                            <div className='Dialog-message'>
                                { message }
                            </div>
                    }
                    { actions &&
                            <div className='Dialog-actions'>
                                { actions }
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Dialog;
