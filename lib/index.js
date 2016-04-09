import App from './Components/ConnectedApp';
import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
