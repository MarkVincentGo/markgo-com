import React, {
  FunctionComponent, useCallback, useEffect, useRef,
} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import styles from './Window.module.scss';
import { closeWindow } from '../store/actions/actions';
import IconButton from '../Buttons/IconButton';
import { makeWindowDraggable } from '../util/makeDraggable';
import { IWindow } from '../store/reducers/window';
import windowOps from '../startMenuOps';

interface WindowProps {
  windowInfo: IWindow;
}

const Window: FunctionComponent<WindowProps> = ({ windowInfo }): JSX.Element => {
  const dragRef = useRef(null);
  const TLResizeRef = useRef(null);
  const TRResizeRef = useRef(null);
  const BLResizeRef = useRef(null);
  const BRResizeRef = useRef(null);
  const dispatch = useDispatch();
  const { id, name, closed } = windowInfo;
  const { size, content } = (windowOps as {[key: string]: any})[name].data;
  const { height, width } = size;

  const handleClose = useCallback(
    () => dispatch(closeWindow(id)),
    [dispatch, windowInfo],
  );

  useEffect(() => {
    // makeDraggable(dragRef.current);
    makeWindowDraggable(dragRef.current,
      dragRef.current.querySelector(`.${styles.windowTopbar}`),
      {
        TL: TLResizeRef.current,
        BL: BLResizeRef.current,
        TR: TRResizeRef.current,
        BR: BRResizeRef.current,
      });
  }, []);

  return (
    <div
      className={cx(styles.windowContainer, closed ? styles.windowClosed : '')}
      style={{ height, width }}
      ref={dragRef}
    >
      <div className={styles.windowInnerBorder}>
        <div className={styles.windowTopbar}>
          <div className={styles.windowTitle}>{name}</div>
          <div className={styles.topbarButtons}>
            <IconButton icon="_" onClick={() => {}} />
            <IconButton icon="O" onClick={() => {}} />
            <IconButton icon="X" onClick={handleClose} />
          </div>
        </div>
        <div className={styles.contentOuter}>
          <div className={styles.contentInner}>
            {content}
          </div>
        </div>
      </div>
      <div className={styles.topLeftResizer} ref={TLResizeRef} />
      <div className={styles.topRightResizer} ref={TRResizeRef} />
      <div className={styles.botLeftResizer} ref={BLResizeRef} />
      <div className={styles.botRightResizer} ref={BRResizeRef} />
    </div>
  );
};

export default Window;
