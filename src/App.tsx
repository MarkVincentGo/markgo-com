import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import './global.scss';

import Background from './Background/Background';
import Taskbar from './Taskbar/Taskbar';
import Window from './Window/Window';
import { RootState } from './store/RootStateType';

const App: FunctionComponent = () => {
  const windows = useSelector((state: RootState) => state.windows.windowsOpen);

  return (
    <div className="global">
      <Background />
      <Taskbar />
      {/* DISPLAY ALL WINDOWS */}
      {windows.map((window: any) => (
        <Window />
      ))}
    </div>
  );
};

export default App;

// const app = document.querySelector('#app')
// app.appendChild(component());
