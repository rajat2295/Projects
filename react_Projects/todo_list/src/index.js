import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import reducer from './store/reducers/reducer'

let store =createStore(reducer);

const app = (
        <Provider store={store}>
        <App />
        </Provider>
);

ReactDOM.render(app, document.getElementById('root'));