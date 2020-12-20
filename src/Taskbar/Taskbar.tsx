import React, {FunctionComponent} from 'react';
import styles from "./Taskbar.module.scss";
import { useSelector, useDispatch } from 'react-redux';

import { toggleStart } from '../store/actions'



interface TaskbarProps {
  currentWindows?: JSX.Element | JSX.Element[] | string
}

const StartButton: FunctionComponent<any> = () => {
  const clicked = useSelector((state: any) => state.startButton.clicked);
  const dispatch = useDispatch();


  return (
    <button
      className={clicked ? styles.startButtonContainerClicked : styles.startButtonContainer}
      onClick={() => dispatch({type: 'CLICK_START'})}
    >
      <div className={clicked ? styles.startButtonContentClicked : styles.startButtonContent}>Start</div>
    </button>
    )
}

const Taskbar: FunctionComponent<TaskbarProps> = ({currentWindows}) => {
  const hi = "hi";
  return (
    <div className={styles.taskbarContainer}>
      <div className={styles.taskbarDepthDecorator1}/>

      <div className={styles.buttons}>
        <StartButton />
      </div>
    </div>
  );
};

export default Taskbar;
