import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';

import thunkMiddleware from 'redux-thunk';
import {userActions} from "./actions/user.actions";
import App from './App';
import './index.css';
import {authentication} from "./reducers/authentication.reducer";
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(authentication, applyMiddleware(loggerMiddleware, thunkMiddleware));

store.dispatch(userActions.login("a", "a"));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
