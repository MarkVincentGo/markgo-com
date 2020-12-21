import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import styles from './IconButton.module.scss';
// import { useSelector, useDispatch } from 'react-redux';

interface ButtonProps {
  text?: string;
  icon?: string;
  className?: string;
  onClick(): void;
}

const IconButton: FunctionComponent<ButtonProps> = ({
  icon, className, onClick,
}) => (
  <button
    onClick={onClick}
    type="button"
    className={cx(styles.buttonContainer, className)}
  >
    <div className={styles.buttonInnerBorder}>
      {icon}
    </div>
  </button>
);

export default IconButton;
