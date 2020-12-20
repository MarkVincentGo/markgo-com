import React, {FunctionComponent} from 'react';
import styles from "./Background.module.scss";

interface BackgroundProps {
  children?: JSX.Element | JSX.Element[] | string
}

const Background: FunctionComponent<BackgroundProps> = ({children}) => {
  const hi = "hi";
  return (
    <div className={styles.backgroundContainer}></div>
  );
};

export default Background;
