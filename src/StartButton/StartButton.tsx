import React, { FunctionComponent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './StartButton.module.scss';

import { addWindow, toggleStart } from '../store/actions/actions';

const StartButton: FunctionComponent<any> = () => {
  const clicked = useSelector((state: any) => state.startButton.clicked);
  const dispatch = useDispatch();

  const handleStartClick = useCallback(
    (click: boolean) => dispatch(toggleStart(click)),
    [dispatch],
  );

  return (
    <button
      type="button"
      className={clicked ? styles.startButtonContainerClicked : styles.startButtonContainer}
      onClick={() => handleStartClick(!clicked)}
    >
      <div
        className={clicked ? styles.startButtonContentClicked : styles.startButtonContent}
      >
        Start
      </div>
    </button>
  );
};

export const StartMenu: FunctionComponent = () => {
  const windowsOpen = useSelector((state: any) => state.windows.windowsOpen);
  const dispatch = useDispatch();

  const list = ['Resume', 'Projects', 'Contact Me', 'About This Page', 'Switch to Mac'];

  const handleOptionClick = useCallback(
    (newWindow: string) => {
      dispatch(addWindow(newWindow));
      dispatch(toggleStart(false));
    },
    [dispatch],
  );

  return (
    <div className={styles.startMenuContainer}>
      <div className={styles.startMenuContent}>
        <div className={styles.sideBar}>
          <div className={styles.sideBarText}>Marks 2021 Portfolio</div>
        </div>
        <div className={styles.optionList}>
          {
            list.map((item, i) => (
              <button
                type="button"
                onClick={() => handleOptionClick(item)}
                className={styles.optionItem}
                key={i.toString()}
              >
                <img className={styles.optionIcon} alt="" src="" />
                <div className={styles.optionText}>{item}</div>
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default StartButton;
