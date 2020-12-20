import React, {FunctionComponent, useState} from 'react';
import styles from "./Taskbar.module.scss";

interface TaskbarProps {
  currentWindows?: JSX.Element | JSX.Element[] | string
}

const StartButton: FunctionComponent = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      className={clicked ? styles.startButtonContainerClicked : styles.startButtonContainer}
      onClick={() => setClicked(!clicked)}
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
      {/* Start button */}
        <StartButton />
      </div>
    </div>
  );
};

export default Taskbar;
