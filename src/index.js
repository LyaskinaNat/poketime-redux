//index.js is an entry point of our App
// It is a good place where we can create a Redux Store
// we import Provider  - React-Redux lib which makes react components interact with Redux store
// we wrap our main component App with a Provider component and 
//we are going to pass our Store to a Provider - this will provide our App with the Store
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
//creating a Store
//we need to pass reducer to it
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
