import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';

import reducers from './store/reducers';
import './global.scss';

import Background from './Background/Background';
import Taskbar from './Taskbar/Taskbar';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const App: FunctionComponent = () => (
  <div className="global">
    <Background />
    <Taskbar />
  </div>
)

render(
  <Provider store={Store}>
    <App />
  </Provider>
, document.getElementById('app'));

// const app = document.querySelector('#app')
// app.appendChild(component());
