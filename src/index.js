import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {authentication} from "./reducers/authentication.reducer";
import {userActions} from "./actions/user.actions";
import {createBrowserHistory} from "history";
import './index.css';
import {alert} from "./reducers/alert.reducer";
import registerServiceWorker from "./registerServiceWorker";
import RootRouter from "./router/root.router";

const rootReducer = combineReducers({authentication, alert});

/** Creating root store */
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //Redux widget
    applyMiddleware(
        createLogger(),
        thunkMiddleware));

/** Fake dispatch */
//store.dispatch(userActions.login("a", "a"));
//store.dispatch(alertActions.success("Test"));

ReactDOM.render(
    <Provider store={store}>
        <RootRouter/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
