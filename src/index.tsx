import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import './global.scss';

import Background from './Background/Background';
import Taskbar from './Taskbar/Taskbar';

const App: FunctionComponent = () => (
  <div className="global">
    <Background />
    <Taskbar />
  </div>
)

render(<App />, document.getElementById('app'));

// const app = document.querySelector('#app')
// app.appendChild(component());
