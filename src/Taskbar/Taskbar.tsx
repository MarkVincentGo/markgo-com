import React, { FunctionComponent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import styles from './Taskbar.module.scss';

import { toggleStart } from '../store/actions/toggleStart';
import StartButton, { StartMenu } from '../StartButton/StartButton';
import { RootState } from '../store/RootStateType';
import TextIconButton from '../Buttons/TextIconButton';

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
          {windowsOpen.map((window: any) => (
            <TextIconButton onClick={() => {}} icon="" text={window} depressable />
          ))}
        </div>
      </div>
      {/* Start Menu */}
      { startButtonClicked && <StartMenu /> }
    </div>
  );
};

export default Taskbar;
