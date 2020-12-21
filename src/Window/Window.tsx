import React, { FunctionComponent, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Window.module.scss';
import { addWindow } from '../store/actions/toggleStart';
import IconButton from '../Buttons/IconButton';


const Window: FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClose = useCallback(
    () => dispatch(addWindow([])),
    [dispatch],
  );

  return (
    <div className={styles.windowContainer}>
      <div className={styles.windowInnerBorder}>
        <div className={styles.windowTopbar}>
          <div className={styles.windowTitle}>Test</div>
          <div className={styles.topbarButtons}>
            <IconButton icon="_" onClick={() => {}} />
            <IconButton icon="O" onClick={() => {}} />
            <IconButton icon="X" onClick={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
