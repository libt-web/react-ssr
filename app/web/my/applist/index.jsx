import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Html from '../../framework/layout/layout';
import Applist from './view/Applist';
import { makeStore } from './store';

const clientRender = () => {
    const store = makeStore(window.__INITIAL_STATE__.store);
    const Entry = () => (<Provider store={store}>
        <Applist />
    </Provider>);
    const render = (App) => {
        ReactDOM.hydrate(EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />, document.getElementById('app'));
    };
    if (EASY_ENV_IS_DEV && module.hot) {
        module.hot.accept();
    }
    render(Entry);
}

const serverRender = async (context, options) => {
    const state = context.state;
    console.log('2', state.store);
    const store = makeStore(state.store);
    return () => (<Html title="应用中心">
        <Provider store={store}>
            <Applist></Applist>
        </Provider>
    </Html>);
}

export default EASY_ENV_IS_NODE ? serverRender : clientRender();