import React, {
  FunctionComponent, useCallback, useEffect, useRef
} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './Window.module.scss';
import { addWindow } from '../store/actions/toggleStart';
import IconButton from '../Buttons/IconButton';
import { makeWindowDraggable } from '../util/makeDraggable';

interface WindowProps {
  title: string;
}

const Window: FunctionComponent<WindowProps> = ({ title }): JSX.Element => {
  const dragRef = useRef(null);
  const dispatch = useDispatch();

  const handleClose = useCallback(
    () => dispatch(addWindow([])),
    [dispatch],
  );

  useEffect(() => {
    // makeDraggable(dragRef.current);

    makeWindowDraggable(dragRef.current,
      dragRef.current.querySelector(`.${styles.windowTopbar}`));
  }, []);

  return (
    <div className={styles.windowContainer} ref={dragRef}>
      <div className={styles.windowInnerBorder}>
        <div className={styles.windowTopbar}>
          <div className={styles.windowTitle}>{title}</div>
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
