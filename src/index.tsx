import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import reducers from './store/reducers';
import './global.scss';

import App from './App';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

// const app = document.querySelector('#app')
// app.appendChild(component());
