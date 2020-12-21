import React, { FunctionComponent, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import styles from './TextIconButton.module.scss';

interface ButtonProps {
  text?: string;
  icon?: string;
  className?: string;
  onClick(): void;
  depressable?: boolean;
}

export const TextIconButton: FunctionComponent<ButtonProps> = ({
  text, icon, className, onClick, depressable = false,
}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    onClick();
    setActive(!active);
  };

  return (
  <div>
    <button
      onClick={handleClick}
      type="button"
      className={
        depressable
          ? cx(active ? styles.buttonContainerActive : styles.buttonContainer, className)
          : cx(styles.buttonContainer, className)
      }
    >
      <div className={styles.buttonInnerBorder}>
        {icon}
        {text}
      </div>
    </button>
  </div>
  );};

export default TextIconButton;
