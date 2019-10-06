import React from 'react';
import { ToastProvider, withToastManager } from 'react-toast-notifications';

let NotificationsContext  = React.createContext();

class Provider extends React.Component
{
    notify = (content, appearance, duration) => {
        const { toastManager } = this.props;

        toastManager.add(content, {
            appearance: appearance,
            autoDismiss: true
        });
    }

    success = (content, duration) => this.notify(content, 'success', duration);

    error = (content, duration) => this.notify(content, 'error', duration);

    warning = (content, duration) => this.notify(content, 'warning', duration);

    info = (content, duration) => this.notify(content, 'info', duration);

    render() {
        return (
            <NotificationsContext.Provider value={{
                notify: this.notify,
                success: this.success,
                error: this.error,
                warning: this.error,
                info: this.info
            }}>
                { this.props.children }
            </NotificationsContext.Provider>
        )
    }
}

const withNotificationsContext = Component => {
    return props => {
        return (
            <NotificationsContext.Consumer>
                {context => {
                    return <Component {...props} notifications={context} />;
                }}
            </NotificationsContext.Consumer>
        );
    };
};

Provider = withToastManager(Provider);

let NotificationsConsumer = NotificationsContext.Consumer,
    NotificationsProvider = props => (
        <ToastProvider>
            <Provider>
                {props.children}
            </Provider>
        </ToastProvider>
    )


export {
    NotificationsProvider,
    NotificationsConsumer,
    withNotificationsContext
}

export default NotificationsContext;
