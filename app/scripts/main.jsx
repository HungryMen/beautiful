/**
 * Created by zhangchao on 2017/7/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import AppReducer from './reducers/AppReducer';

import Register from './components/User/Register';

let store = createStore(AppReducer, applyMiddleware(thunkMiddleware));

const appElement = document.createElement('div');

document.body.appendChild(appElement);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route path='/' component={Register} />
            </Router>
        </Provider>,
        appElement
    );
});
