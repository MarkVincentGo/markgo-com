import React, { FunctionComponent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import styles from './Taskbar.module.scss';

import { toggleStart } from '../store/actions/actions';
import StartButton, { StartMenu } from '../StartButton/StartButton';
import { RootState } from '../store/RootStateType';
import TextIconButton from '../Buttons/TextIconButton';
import { IWindow } from '../store/reducers/window';

const Divider: FunctionComponent = () => (
  <>
    <div className={styles.divider} />
  </>
);

interface TaskbarProps {
  currentWindows?: JSX.Element | JSX.Element[] | string
}

const Taskbar: FunctionComponent<TaskbarProps> = () => {
  const state = useSelector((current: RootState) => current);
  const startButtonClicked = state.startButton.clicked;
  const { windowsOpen } = state.windows;

  return (
    <div className={styles.taskbarContainer}>
      <div className={styles.taskbarDepthDecorator1} />

      <div className={styles.buttons}>
        <StartButton />
        <Divider />
        <div className={styles.taskbarWindows}>
          {windowsOpen.map((window: IWindow, i: number) => (
            !window.closed && <TextIconButton onClick={() => {}} icon="" text={window.name} depressable key={i.toString()} />
          ))}
        </div>
      </div>
      {/* Start Menu */}
      { startButtonClicked && <StartMenu /> }
    </div>
  );
};

export default Taskbar;
