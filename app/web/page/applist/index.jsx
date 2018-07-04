import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Layout from '../../framework/layout/layout';
import Applist from './applist';

const clientRender = () => {
    const props = window.__INITIAL_STATE__;
    const Entry = () => (<Layout><Applist num={props.num}></Applist></Layout>);
    const render = (App) => {
        ReactDOM.hydrate(EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />, document.getElementById('app'));
    };
    if (EASY_ENV_IS_DEV && module.hot) {
        module.hot.accept();
    }
    render(Entry);
}

const serverRender = async (context, options) => {
    const props = { num: 10 };
    return () => (<Layout><Applist num={props.num}></Applist></Layout>);
}

export default EASY_ENV_IS_NODE ? serverRender : clientRender();