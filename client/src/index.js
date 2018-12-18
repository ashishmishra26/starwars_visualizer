import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
// importing dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//importing reducers
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk)); //create redux store and use thunk middleware for aync call like data fetching

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); // Provider component of react-redux library helps in acess of store across all components

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
